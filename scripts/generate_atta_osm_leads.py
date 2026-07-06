"""
Generate additional Atta Group leads from public OpenStreetMap / Overpass data.

This is a reproducible lead generator, not a private-data scraper. It pulls named
Egypt records that look like factories, industrial companies, contractors, or
construction/material suppliers, scores them for Atta products, and writes a
TypeScript lead pack consumed by the dashboard.

Usage:
  python -B scripts/generate_atta_osm_leads.py --limit 300
"""

from __future__ import annotations

import argparse
import json
import re
import time
from pathlib import Path
from typing import Any
from urllib.parse import quote
from urllib.request import Request, urlopen


OVERPASS_URLS = [
    "https://overpass-api.de/api/interpreter",
    "https://overpass.kumi.systems/api/interpreter",
]

CACHE_PATH = Path("tmp") / "lead_enrichment" / "egypt_industrial_osm_overpass.json"
OUTPUT_PATH = Path("src") / "lib" / "atta-generated-leads.ts"
REPORT_PATH = Path("tmp") / "lead_enrichment" / "atta-generated-osm-leads.json"
SECONDARY_OSM_CACHES = [Path("tmp") / "lead_cache" / "cairo_osm_overpass.json"]

EGYPT_INDUSTRIAL_BBOXES = [
    ("cairo-giza-october-obour-badr", 29.70, 30.55, 31.85, 30.35),
    ("alexandria-borg-el-arab", 30.60, 29.35, 31.35, 30.25),
    ("suez-ismailia-ain-sokhna", 29.35, 31.85, 30.95, 33.10),
    ("sharqia-10th-ramadan", 30.05, 31.45, 30.75, 32.10),
    ("monufia-sadat-city", 30.20, 30.20, 30.95, 31.05),
    ("beni-suef-minya-fayoum", 27.65, 30.10, 29.35, 31.30),
    ("delta-industrial", 30.25, 30.65, 31.40, 31.75),
    ("upper-egypt-industrial", 24.00, 32.00, 27.80, 33.20),
]

INDUSTRIAL_TERMS = {
    "factory",
    "plant",
    "works",
    "industrial",
    "manufacturing",
    "production",
    "steel",
    "metal",
    "cement",
    "concrete",
    "ceramic",
    "glass",
    "chemical",
    "paint",
    "plastic",
    "packaging",
    "textile",
    "spinning",
    "weaving",
    "food",
    "dairy",
    "pharma",
    "pharmaceutical",
    "fertilizer",
    "construction",
    "contracting",
    "contractor",
    "engineering",
    "electrical",
    "power",
    "panel",
    "compressor",
    "oxygen",
    "nitrogen",
    "gas",
    "quarry",
    "mining",
    "asphalt",
    "brick",
    "tiles",
}

CONSTRUCTION_TERMS = {
    "construction",
    "contracting",
    "contractor",
    "engineering",
    "concrete",
    "cement",
    "asphalt",
    "quarry",
    "brick",
    "steel",
    "metal",
    "building",
    "materials",
}

CHEMICAL_GAS_TERMS = {
    "chemical",
    "paint",
    "pharma",
    "pharmaceutical",
    "fertilizer",
    "food",
    "beverage",
    "dairy",
    "gas",
    "oxygen",
    "nitrogen",
}

HEAVY_POWER_TERMS = {
    "steel",
    "metal",
    "cement",
    "ceramic",
    "glass",
    "textile",
    "plastic",
    "packaging",
    "factory",
    "plant",
    "industrial",
    "manufacturing",
    "electrical",
    "power",
}

GOVERNORATE_HINTS = {
    "10th of ramadan": ("Sharqia", "10th of Ramadan"),
    "tenth of ramadan": ("Sharqia", "10th of Ramadan"),
    "6th of october": ("Giza", "6th of October"),
    "sixth of october": ("Giza", "6th of October"),
    "sadat": ("Monufia", "Sadat City"),
    "obour": ("Qalyubia", "Obour City"),
    "badr": ("Cairo", "Badr City"),
    "borg el arab": ("Alexandria", "Borg El Arab"),
    "new cairo": ("Cairo", "New Cairo"),
    "suez": ("Suez", "Suez"),
    "ismailia": ("Ismailia", "Ismailia"),
    "beni suef": ("Beni Suef", "Beni Suef"),
    "minya": ("Minya", "Minya"),
    "alexandria": ("Alexandria", "Alexandria"),
    "cairo": ("Cairo", "Cairo"),
    "giza": ("Giza", "Giza"),
}


def overpass_query() -> str:
    return """
[out:json][timeout:180];
area["ISO3166-1"="EG"][admin_level=2]->.egypt;
(
  nwr["man_made"="works"]["name"](area.egypt);
  nwr["landuse"="industrial"]["name"](area.egypt);
  nwr["industrial"]["name"](area.egypt);
  nwr["office"="construction"]["name"](area.egypt);
  nwr["office"="company"]["name"](area.egypt);
  nwr["craft"]["name"](area.egypt);
  nwr["shop"="trade"]["name"](area.egypt);
  nwr["building"="industrial"]["name"](area.egypt);
);
out center tags;
"""


def overpass_bbox_query(south: float, west: float, north: float, east: float) -> str:
    bbox = f"{south},{west},{north},{east}"
    return f"""
[out:json][timeout:120];
(
  nwr["man_made"="works"]["name"]({bbox});
  nwr["landuse"="industrial"]["name"]({bbox});
  nwr["industrial"]["name"]({bbox});
  nwr["office"="construction"]["name"]({bbox});
  nwr["office"="company"]["name"]({bbox});
  nwr["craft"]["name"]({bbox});
  nwr["shop"="trade"]["name"]({bbox});
  nwr["building"="industrial"]["name"]({bbox});
);
out center tags;
"""


def post_overpass(query: str) -> dict[str, Any]:
    body = f"data={quote(query)}".encode("utf-8")
    last_error: Exception | None = None
    for url in OVERPASS_URLS:
        try:
            req = Request(
                url,
                data=body,
                headers={
                    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
                    "User-Agent": "AttaLeadGenerator/1.0 public OSM research",
                },
            )
            with urlopen(req, timeout=180) as response:
                return json.loads(response.read().decode("utf-8"))
        except Exception as exc:
            last_error = exc
            time.sleep(3)
    raise RuntimeError(f"Overpass fetch failed: {last_error}")


def fetch_overpass(force: bool = False) -> dict[str, Any]:
    CACHE_PATH.parent.mkdir(parents=True, exist_ok=True)

    elements_by_id: dict[str, dict[str, Any]] = {}
    for label, south, west, north, east in EGYPT_INDUSTRIAL_BBOXES:
        batch_path = CACHE_PATH.with_name(f"egypt_industrial_osm_{label}.json")
        if batch_path.exists() and not force:
            data = json.loads(batch_path.read_text(encoding="utf-8"))
        else:
            print(f"Fetching {label}...")
            try:
                data = post_overpass(overpass_bbox_query(south, west, north, east))
                batch_path.write_text(json.dumps(data, ensure_ascii=False), encoding="utf-8")
            except Exception as exc:
                print(f"Skipped {label}: {exc}")
                continue
        for element in data.get("elements", []):
            elements_by_id[f"{element.get('type')}/{element.get('id')}"] = element

    for secondary_cache in SECONDARY_OSM_CACHES:
        if secondary_cache.exists():
            data = json.loads(secondary_cache.read_text(encoding="utf-8"))
            for element in data.get("elements", []):
                elements_by_id[f"{element.get('type')}/{element.get('id')}"] = element

    data = {"elements": list(elements_by_id.values())}
    CACHE_PATH.write_text(json.dumps(data, ensure_ascii=False), encoding="utf-8")
    return data


def clean(value: Any) -> str:
    if value is None:
        return ""
    return re.sub(r"\s+", " ", str(value)).strip()


def slugify(value: str) -> str:
    slug = re.sub(r"[^a-z0-9]+", "-", value.lower()).strip("-")
    return slug[:70] or "lead"


def lead_source_url(element: dict[str, Any]) -> str:
    return f"https://www.openstreetmap.org/{element.get('type')}/{element.get('id')}"


def detect_location(tags: dict[str, Any]) -> tuple[str, str, str, str]:
    text = " ".join(
        clean(tags.get(key))
        for key in [
            "addr:city",
            "addr:suburb",
            "addr:district",
            "addr:governorate",
            "addr:state",
            "addr:street",
            "addr:full",
            "name",
        ]
    ).lower()

    governorate = clean(tags.get("addr:governorate") or tags.get("addr:state"))
    city = clean(tags.get("addr:city") or tags.get("addr:suburb") or tags.get("addr:district"))
    for hint, detected in GOVERNORATE_HINTS.items():
        if hint in text:
            governorate = governorate or detected[0]
            city = city or detected[1]
            break

    industrial_zone = clean(tags.get("addr:industrial") or tags.get("industrial") or tags.get("landuse"))
    if not industrial_zone:
        if "industrial" in text:
            industrial_zone = "Industrial area"
        elif city:
            industrial_zone = f"{city} industrial/commercial area"
        else:
            industrial_zone = "Egypt industrial/commercial area"

    address_parts = [
        clean(tags.get("addr:housenumber")),
        clean(tags.get("addr:street")),
        city,
        governorate,
    ]
    address = ", ".join(part for part in address_parts if part)
    return governorate or "Egypt", city or "Egypt", industrial_zone, address or "Verify exact address from source"


def classify(tags: dict[str, Any], name: str) -> tuple[str, str, list[str], list[str]]:
    text = " ".join([name] + [clean(value) for value in tags.values()]).lower()
    products: list[str] = ["facility-maintenance"]
    pain: list[str] = []

    if any(term in text for term in HEAVY_POWER_TERMS):
        products.insert(0, "transformers")
        pain.append("Industrial power reliability")

    if any(term in text for term in CHEMICAL_GAS_TERMS):
        products.append("oxygen-nitrogen")
        products.append("gas-compressors")
        pain.append("Plant utilities and process gas demand")

    if any(term in text for term in CONSTRUCTION_TERMS) or tags.get("office") == "construction":
        products.append("civil-mechanical")
        pain.append("Project execution and site support")

    if "electrical" in text or "panel" in text or "power" in text:
        products.append("electrical-panels")
        pain.append("Electrical distribution and panel integration")

    products = list(dict.fromkeys(products))[:4]

    if "construction" in text or tags.get("office") == "construction":
        return "Construction and contracting", "Construction company", products, pain
    if "steel" in text or "cement" in text or "metal" in text or "concrete" in text:
        return "Heavy construction materials manufacturing", "Heavy manufacturing", products, pain
    if "chemical" in text or "paint" in text or "pharma" in text or "fertilizer" in text:
        return "Chemical and process manufacturing", "Chemical factory", products, pain
    if "food" in text or "dairy" in text or "beverage" in text:
        return "Food and beverage manufacturing", "Factory", products, pain
    if "textile" in text or "spinning" in text or "weaving" in text:
        return "Textile manufacturing", "Factory", products, pain
    if "electrical" in text or "panel" in text or "power" in text:
        return "Electrical manufacturing and supply", "Electrical manufacturer", products, pain
    if tags.get("man_made") == "works" or tags.get("building") == "industrial":
        return "Industrial manufacturing", "Factory", products, pain
    return "Industrial or construction buyer", "Industrial company", products, pain


def score(tags: dict[str, Any], name: str, products: list[str]) -> tuple[int, dict[str, int], str, str]:
    text = " ".join([name] + [clean(value) for value in tags.values()]).lower()
    term_hits = sum(1 for term in INDUSTRIAL_TERMS if term in text)
    has_contact = any(tags.get(key) for key in ["phone", "contact:phone", "email", "contact:email", "website", "contact:website"])
    has_website = bool(tags.get("website") or tags.get("contact:website"))
    is_factory = tags.get("man_made") == "works" or tags.get("building") == "industrial" or "factory" in text or "plant" in text
    is_construction = tags.get("office") == "construction" or any(term in text for term in CONSTRUCTION_TERMS)

    breakdown = {
        "industryFit": min(20, 11 + term_hits + (4 if is_factory else 0) + (3 if is_construction else 0)),
        "productFit": min(20, 9 + len(products) * 3 + (2 if "transformers" in products else 0)),
        "locationFit": 16 if any(hint in text for hint in GOVERNORATE_HINTS) else 11,
        "contactability": 15 if has_contact else 9 if has_website else 5,
        "companySignal": min(20, 9 + (5 if is_factory else 0) + (3 if is_construction else 0) + min(3, term_hits)),
        "sourceConfidence": 8,
    }
    total = sum(breakdown.values())
    confidence = "High" if has_contact or has_website else "Medium" if total >= 72 else "Needs verification"
    value = "Strategic" if total >= 88 else "High" if total >= 78 else "Medium" if total >= 66 else "Low"
    return total, breakdown, confidence, value


def tags_text(tags: dict[str, Any]) -> str:
    return " ".join(clean(value) for value in tags.values()).lower()


def eligible(element: dict[str, Any]) -> bool:
    tags = element.get("tags", {})
    name = clean(tags.get("name:en") or tags.get("name"))
    if len(name) < 3:
        return False
    text = tags_text(tags) + " " + name.lower()
    if any(bad in text for bad in ["mosque", "church", "school", "restaurant", "cafe", "pharmacy", "hotel", "bank", "clinic"]):
        return False
    useful_shop = tags.get("shop") in {
        "trade",
        "hardware",
        "doityourself",
        "car_repair",
        "car_parts",
        "furniture",
        "electronics",
        "appliance",
        "computer",
    }
    return (
        tags.get("man_made") == "works"
        or tags.get("building") == "industrial"
        or tags.get("landuse") == "industrial"
        or tags.get("office") == "company"
        or tags.get("office") == "construction"
        or useful_shop
        or sum(1 for term in INDUSTRIAL_TERMS if term in text) >= 1
    )


def to_lead(element: dict[str, Any], index: int) -> dict[str, Any]:
    tags = element.get("tags", {})
    name = clean(tags.get("name:en") or tags.get("name"))
    industry, segment, products, pain = classify(tags, name)
    total, breakdown, confidence, expected_value = score(tags, name, products)
    governorate, city, industrial_zone, address = detect_location(tags)
    website = clean(tags.get("contact:website") or tags.get("website"))
    phone = clean(tags.get("contact:phone") or tags.get("phone"))
    email = clean(tags.get("contact:email") or tags.get("email"))
    source_url = lead_source_url(element)

    if not pain:
        pain = ["Industrial buyer signal", "Potential maintenance or utility need"]

    product_labels = {
        "transformers": "DATSAN transformers",
        "electrical-panels": "electrical panels",
        "gas-compressors": "gas compressors",
        "oxygen-nitrogen": "oxygen / nitrogen generators",
        "civil-mechanical": "civil and M&E contracting",
        "facility-maintenance": "facility maintenance",
    }
    pitch_products = ", ".join(product_labels[item] for item in products)
    safe_id = f"osm-{element.get('type')}-{element.get('id')}-{slugify(name)}"

    return {
        "id": safe_id[:96],
        "companyName": name,
        "industry": industry,
        "segment": segment,
        "governorate": governorate,
        "city": city,
        "industrialZone": industrial_zone,
        "address": address,
        "website": website or source_url,
        "phone": phone or "Verify from source",
        "email": email or "Verify from source",
        "sourceName": "OpenStreetMap public industrial record",
        "sourceUrl": source_url,
        "sourceType": "Public directory",
        "productsToPitch": products,
        "fitScore": total,
        "scoreBreakdown": breakdown,
        "confidence": confidence,
        "whyGoodFit": f"{name} is listed in public map data with industrial/construction signals, making it a relevant prospect for {pitch_products}.",
        "painSignals": pain[:4],
        "suggestedPitch": f"Lead with {pitch_products}, framed around uptime, utility reliability, and project delivery for their {industry.lower()} operation.",
        "nextAction": "Verify the listed source, identify procurement or maintenance contact, then send a short Atta capability message.",
        "expectedValue": expected_value,
        "lastVerified": "2026-06-06",
    }


def ts_string(value: Any, indent: int = 0) -> str:
    spacing = " " * indent
    if isinstance(value, str):
        return json.dumps(value, ensure_ascii=False)
    if isinstance(value, bool):
        return "true" if value else "false"
    if isinstance(value, (int, float)):
        return str(value)
    if isinstance(value, list):
        return "[" + ", ".join(ts_string(item, indent) for item in value) + "]"
    if isinstance(value, dict):
        parts = []
        for key, item in value.items():
            parts.append(f"{json.dumps(key)}: {ts_string(item, indent + 2)}")
        return "{ " + ", ".join(parts) + " }"
    return "null"


def write_ts(leads: list[dict[str, Any]]) -> None:
    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    lines = [
        'import type { AttaLead } from "./atta-leads";',
        "",
        "// Generated by scripts/generate_atta_osm_leads.py from public OpenStreetMap/Overpass data.",
        "export const generatedAttaLeads: AttaLead[] = [",
    ]
    for lead in leads:
        lines.append("  {")
        for key, value in lead.items():
            lines.append(f"    {key}: {ts_string(value, 4)},")
        lines.append("  },")
    lines.append("];")
    OUTPUT_PATH.write_text("\n".join(lines) + "\n", encoding="utf-8")


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--limit", type=int, default=300)
    parser.add_argument("--force", action="store_true")
    args = parser.parse_args()

    data = fetch_overpass(force=args.force)
    elements = [element for element in data.get("elements", []) if eligible(element)]
    leads = [to_lead(element, index) for index, element in enumerate(elements)]
    deduped: dict[str, dict[str, Any]] = {}
    for lead in leads:
        key = re.sub(r"[^a-z0-9]+", "", lead["companyName"].lower())
        if key and (key not in deduped or lead["fitScore"] > deduped[key]["fitScore"]):
            deduped[key] = lead
    ranked = sorted(deduped.values(), key=lambda item: item["fitScore"], reverse=True)[: args.limit]
    if len(ranked) < args.limit:
        raise RuntimeError(f"Only generated {len(ranked)} eligible leads; requested {args.limit}.")

    REPORT_PATH.parent.mkdir(parents=True, exist_ok=True)
    REPORT_PATH.write_text(json.dumps(ranked, ensure_ascii=False, indent=2), encoding="utf-8")
    try:
        write_ts(ranked)
        print(f"Wrote {OUTPUT_PATH}")
    except PermissionError as exc:
        print(f"Skipped writing {OUTPUT_PATH}: {exc}")
    print(f"Generated {len(ranked)} leads")
    print(f"Wrote {REPORT_PATH}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

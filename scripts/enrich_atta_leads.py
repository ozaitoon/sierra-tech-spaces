"""
Optional public-page enrichment helper for Atta lead research.

Usage:
  python scripts/enrich_atta_leads.py https://example.com/contact https://example.com/about

Install Scrapling first if you want the richer fetcher:
  pip install scrapling

The Next.js demo does not depend on this script. It exists so a sales researcher can
quickly pull public page titles, emails, phones, and useful text snippets into a
JSONL file for manual review before adding leads to the app dataset.
"""

from __future__ import annotations

import json
import re
import sys
from datetime import datetime, timezone
from pathlib import Path
from typing import Any
from urllib.parse import urlparse
from urllib.robotparser import RobotFileParser


EMAIL_RE = re.compile(r"[\w.+-]+@[\w-]+(?:\.[\w-]+)+", re.I)
PHONE_RE = re.compile(r"(?:\+?20|0020)?[\s-]?(?:0)?1[0125][\s-]?\d{3}[\s-]?\d{4}|\+?20[\s-]?\d{2,3}[\s-]?\d{6,8}")


def can_fetch(url: str) -> bool:
    parsed = urlparse(url)
    robots_url = f"{parsed.scheme}://{parsed.netloc}/robots.txt"
    parser = RobotFileParser()
    try:
      parser.set_url(robots_url)
      parser.read()
      return parser.can_fetch("AttaLeadResearchBot", url)
    except Exception:
      return True


def fetch_with_scrapling(url: str) -> tuple[str, str]:
    from scrapling.fetchers import Fetcher

    page = Fetcher.get(url, stealthy_headers=True)
    title = page.css("title::text").get(default="").strip()
    text = " ".join(part.strip() for part in page.css("body ::text").getall() if part.strip())
    return title, text


def fetch_with_stdlib(url: str) -> tuple[str, str]:
    from urllib.request import Request, urlopen

    request = Request(url, headers={"User-Agent": "AttaLeadResearchBot/1.0"})
    with urlopen(request, timeout=20) as response:
        html = response.read().decode("utf-8", errors="ignore")

    title_match = re.search(r"<title[^>]*>(.*?)</title>", html, re.I | re.S)
    title = re.sub(r"\s+", " ", title_match.group(1)).strip() if title_match else ""
    text = re.sub(r"<(script|style).*?</\1>", " ", html, flags=re.I | re.S)
    text = re.sub(r"<[^>]+>", " ", text)
    text = re.sub(r"\s+", " ", text).strip()
    return title, text


def summarize(url: str) -> dict[str, Any]:
    if not can_fetch(url):
        return {
            "url": url,
            "status": "blocked_by_robots",
            "checked_at": datetime.now(timezone.utc).isoformat(),
        }

    try:
        try:
            title, text = fetch_with_scrapling(url)
            fetcher = "scrapling"
        except ModuleNotFoundError:
            title, text = fetch_with_stdlib(url)
            fetcher = "stdlib"

        emails = sorted(set(EMAIL_RE.findall(text)))
        phones = sorted(set(match.group(0).strip() for match in PHONE_RE.finditer(text)))
        industrial_terms = [
            term
            for term in [
                "factory",
                "industrial",
                "transformer",
                "electrical",
                "panel",
                "compressor",
                "maintenance",
                "10th of ramadan",
                "6th of october",
                "sadat",
            ]
            if term in text.lower()
        ]

        return {
            "url": url,
            "status": "ok",
            "fetcher": fetcher,
            "title": title,
            "emails": emails[:8],
            "phones": phones[:8],
            "industrial_terms": industrial_terms,
            "snippet": text[:700],
            "checked_at": datetime.now(timezone.utc).isoformat(),
        }
    except Exception as exc:
        return {
            "url": url,
            "status": "error",
            "error": str(exc),
            "checked_at": datetime.now(timezone.utc).isoformat(),
        }


def main(urls: list[str]) -> int:
    if not urls:
        print("Pass one or more public URLs to enrich.", file=sys.stderr)
        return 2

    output_dir = Path("tmp") / "lead_enrichment"
    output_dir.mkdir(parents=True, exist_ok=True)
    output_file = output_dir / f"atta-lead-enrichment-{datetime.now().strftime('%Y%m%d-%H%M%S')}.jsonl"

    with output_file.open("w", encoding="utf-8") as handle:
        for url in urls:
            result = summarize(url)
            handle.write(json.dumps(result, ensure_ascii=False) + "\n")
            print(f"{result['status']}: {url}")

    print(f"Wrote {output_file}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv[1:]))

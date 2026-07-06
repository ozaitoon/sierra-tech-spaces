from __future__ import annotations

import html
import subprocess
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public" / "atta"
OUTPUT_DIR = ROOT / "output" / "pdf"
TMP_DIR = ROOT / "tmp" / "pdfs" / "atta_company_profile"

HTML_PATH = OUTPUT_DIR / "atta-group-company-profile-upgraded.html"
PDF_PATH = OUTPUT_DIR / "atta-group-company-profile-upgraded.pdf"


def uri(path: Path) -> str:
    return path.resolve().as_uri()


ASSETS = {
    "logo": PUBLIC / "atta-full-logo-transparent.png",
    "mark": PUBLIC / "mohamed-atta-logo-transparent.png",
    "hero": PUBLIC / "transformers.jpg",
    "transformer_detail": PUBLIC / "transform-detail-1.jpeg",
    "electrical": PUBLIC / "electrical.jpg",
    "civil": PUBLIC / "civil-detail-1.jpg",
    "mechanical": PUBLIC / "me-detail-2.jpg",
    "maintenance": PUBLIC / "hero-industrial.jpg",
    "transmission": PUBLIC / "project-transmission-1.jpg",
    "road": PUBLIC / "project-road-detail-1.jpg",
    "tank": PUBLIC / "project-tank-detail-1.jpg",
    "welding": PUBLIC / "project-welding-detail-2.jpg",
    "galvanizing": PUBLIC / "project-galvanizing-1.jpg",
    "borg": PUBLIC / "project-borg-1.jpg",
    "guardx": PUBLIC / "future" / "guardx-ai.png",
    "nexus": PUBLIC / "future" / "nexus-n-micro-reactor.png",
}

PARTNER_LOGOS = [
    "01_khalda_apache.png",
    "02_orascom_construction_industries.png",
    "03_emc_egyptian_maintenance_company.png",
    "04_petrofarah.png",
    "05_bapetco.png",
    "06_orascom_trading.png",
    "07_eto.png",
    "08_egts.png",
    "09_alexandria_drinking_water_company.png",
    "10_datsan.png",
]


def esc(text: str) -> str:
    return html.escape(text, quote=True)


def image(name: str, class_name: str = "") -> str:
    asset = ASSETS[name]
    if not asset.exists():
        return ""
    return f'<img class="{esc(class_name)}" src="{uri(asset)}" alt="">'


def bullets(items: list[str]) -> str:
    return "<ul>" + "".join(f"<li>{esc(item)}</li>" for item in items) + "</ul>"


def metric(value: str, label: str) -> str:
    return f"""
    <div class="metric">
      <strong>{esc(value)}</strong>
      <span>{esc(label)}</span>
    </div>
    """


def service_card(title: str, kicker: str, points: list[str]) -> str:
    return f"""
    <article class="service-card">
      <p class="kicker">{esc(kicker)}</p>
      <h3>{esc(title)}</h3>
      {bullets(points)}
    </article>
    """


def project_card(title: str, meta: str, image_key: str, points: list[str]) -> str:
    return f"""
    <article class="project-card">
      <div class="project-image">{image(image_key)}</div>
      <div>
        <p class="kicker">{esc(meta)}</p>
        <h3>{esc(title)}</h3>
        {bullets(points)}
      </div>
    </article>
    """


def partner_grid() -> str:
    logos = []
    base = PUBLIC / "partners-transparent"
    for name in PARTNER_LOGOS:
        path = base / name
        if path.exists():
            label = name.removesuffix(".png")
            label = label.split("_", 1)[1] if "_" in label else label
            label = label.replace("_", " ").title()
            logos.append(
                f'<div class="partner"><img src="{uri(path)}" alt="{esc(label)}"><span>{esc(label)}</span></div>'
            )
    return '<div class="partner-grid">' + "".join(logos) + "</div>"


def page(number: str, eyebrow: str, title: str, body: str, extra_class: str = "") -> str:
    return f"""
    <section class="page {esc(extra_class)}">
      <header class="page-header">
        <div class="brand-row">
          {image("logo", "header-logo")}
          <span>Company Profile 2026</span>
        </div>
        <span class="page-number">{esc(number)}</span>
      </header>
      <main>
        <p class="eyebrow">{esc(eyebrow)}</p>
        <h1>{esc(title)}</h1>
        {body}
      </main>
    </section>
    """


STYLE = """
@page {
  size: A4;
  margin: 0;
}

* {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  background: #02050a;
  color: #eef6ff;
  font-family: "Inter", "Segoe UI", Arial, sans-serif;
  -webkit-print-color-adjust: exact;
  print-color-adjust: exact;
}

.page {
  position: relative;
  width: 210mm;
  height: 297mm;
  page-break-after: always;
  overflow: hidden;
  padding: 18mm;
  background:
    radial-gradient(circle at 15% 10%, rgba(47, 155, 255, 0.26), transparent 24%),
    radial-gradient(circle at 82% 18%, rgba(24, 213, 194, 0.16), transparent 24%),
    linear-gradient(135deg, #071326 0%, #02050a 58%, #030404 100%);
}

.page::before {
  content: "";
  position: absolute;
  inset: 0;
  opacity: 0.17;
  background-image:
    linear-gradient(90deg, rgba(255,255,255,0.11) 1px, transparent 1px),
    linear-gradient(rgba(255,255,255,0.10) 1px, transparent 1px);
  background-size: 22mm 22mm;
  pointer-events: none;
}

.page::after {
  content: "";
  position: absolute;
  right: -45mm;
  bottom: -55mm;
  width: 110mm;
  height: 110mm;
  border-radius: 999px;
  border: 1px solid rgba(110, 198, 255, 0.22);
  background: rgba(47, 155, 255, 0.05);
  filter: blur(1px);
}

.page-header,
main {
  position: relative;
  z-index: 2;
}

.page-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 13mm;
}

.brand-row {
  display: flex;
  align-items: center;
  gap: 4mm;
  color: rgba(238, 246, 255, 0.66);
  font-size: 9pt;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.header-logo {
  width: 37mm;
  max-height: 11mm;
  object-fit: contain;
}

.page-number {
  color: rgba(238, 246, 255, 0.48);
  font-size: 10pt;
  font-weight: 800;
}

main {
  padding-top: 13mm;
}

.eyebrow,
.kicker {
  margin: 0 0 4mm;
  color: #6ec6ff;
  font-size: 8.5pt;
  font-weight: 900;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

h1 {
  max-width: 155mm;
  margin: 0 0 7mm;
  color: #ffffff;
  font-size: 30pt;
  line-height: 0.96;
  letter-spacing: 0;
  text-transform: uppercase;
}

h2 {
  margin: 0 0 4mm;
  color: #ffffff;
  font-size: 19pt;
  line-height: 1.05;
  text-transform: uppercase;
}

h3 {
  margin: 0 0 3mm;
  color: #ffffff;
  font-size: 13.5pt;
  line-height: 1.12;
}

p {
  margin: 0 0 4mm;
  color: rgba(238, 246, 255, 0.72);
  font-size: 10.5pt;
  line-height: 1.52;
}

.lead {
  max-width: 152mm;
  color: rgba(238, 246, 255, 0.78);
  font-size: 13pt;
  line-height: 1.45;
}

.muted {
  color: rgba(238, 246, 255, 0.56);
}

.arabic {
  direction: rtl;
  font-family: Tahoma, "Segoe UI", Arial, sans-serif;
  color: rgba(238, 246, 255, 0.7);
  line-height: 1.65;
}

.cover {
  padding: 18mm;
}

.cover .page-header {
  z-index: 5;
}

.cover main {
  height: calc(100% - 13mm);
  padding-top: 18mm;
}

.cover-grid {
  display: grid;
  grid-template-columns: 0.95fr 1.05fr;
  gap: 10mm;
  align-items: end;
  min-height: 206mm;
}

.cover-copy {
  position: relative;
  z-index: 3;
  padding-bottom: 9mm;
}

.cover-visual {
  position: relative;
  z-index: 2;
  height: 182mm;
  overflow: hidden;
  border: 1px solid rgba(110, 198, 255, 0.24);
  border-radius: 4mm;
  background:
    linear-gradient(180deg, rgba(255,255,255,0.09), rgba(255,255,255,0.02)),
    rgba(0, 0, 0, 0.28);
  box-shadow: 0 30px 100px rgba(0, 0, 0, 0.42);
}

.cover-visual::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    linear-gradient(180deg, rgba(2, 5, 10, 0.04), rgba(2, 5, 10, 0.72)),
    radial-gradient(circle at 70% 24%, rgba(47, 155, 255, 0.2), transparent 34%);
  z-index: 2;
}

.cover-visual img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(0.9) contrast(1.05);
}

.cover-schematic {
  position: absolute;
  inset: 0;
  z-index: 1;
  overflow: hidden;
}

.cover-schematic::before {
  content: "";
  position: absolute;
  right: 11mm;
  top: 42mm;
  width: 125mm;
  height: 125mm;
  border: 1px solid rgba(110, 198, 255, 0.18);
  border-radius: 999px;
  box-shadow:
    inset 0 0 0 18mm rgba(47, 155, 255, 0.025),
    0 0 80px rgba(47, 155, 255, 0.12);
}

.cover-schematic::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 90mm;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(110, 198, 255, 0.35), transparent);
  transform: rotate(-24deg);
  transform-origin: center;
}

.cover-title {
  max-width: 88mm;
  font-size: 37pt;
  line-height: 0.92;
}

.cover-subtitle {
  max-width: 86mm;
  color: rgba(255, 255, 255, 0.82);
  font-size: 12.5pt;
  line-height: 1.48;
}

.badge-row {
  display: flex;
  flex-wrap: wrap;
  gap: 3mm;
}

.badge {
  border: 1px solid rgba(110, 198, 255, 0.28);
  border-radius: 2mm;
  background: rgba(3, 10, 22, 0.74);
  padding: 2mm 3.5mm;
  color: #dff7ff;
  font-size: 8.5pt;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6mm;
}

.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5mm;
}

.mt-7 {
  margin-top: 7mm;
}

.mt-8 {
  margin-top: 8mm;
}

.panel,
.service-card,
.project-card,
.metric,
.partner,
.quote-panel {
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 3mm;
  background: rgba(255, 255, 255, 0.055);
  box-shadow: 0 18px 54px rgba(0, 0, 0, 0.22);
}

.panel {
  padding: 6mm;
}

.quote-panel {
  margin-top: 7mm;
  padding: 7mm;
  border-color: rgba(24, 213, 194, 0.28);
  background: rgba(24, 213, 194, 0.07);
}

.quote-panel strong {
  display: block;
  margin-bottom: 2mm;
  color: #a7fff7;
  font-size: 11pt;
  text-transform: uppercase;
}

.metric {
  min-height: 27mm;
  padding: 5mm;
}

.metric strong {
  display: block;
  margin-bottom: 2mm;
  color: #ffffff;
  font-size: 23pt;
  line-height: 1;
}

.metric span {
  display: block;
  color: rgba(238, 246, 255, 0.64);
  font-size: 9.5pt;
  line-height: 1.35;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

li {
  position: relative;
  margin: 0 0 2.8mm;
  padding-left: 5mm;
  color: rgba(238, 246, 255, 0.72);
  font-size: 9.6pt;
  line-height: 1.38;
}

li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 2.2mm;
  width: 2mm;
  height: 2mm;
  border-radius: 999px;
  background: #18d5c2;
  box-shadow: 0 0 12px rgba(24, 213, 194, 0.7);
}

.image-strip,
.wide-image {
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 3mm;
  background: rgba(0, 0, 0, 0.36);
}

.image-strip {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 0;
  height: 62mm;
  margin: 7mm 0;
}

.wide-image {
  height: 71mm;
  margin: 7mm 0;
}

.wide-image.short {
  height: 48mm;
  margin-top: 0;
}

.image-strip img,
.wide-image img,
.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.service-card {
  min-height: 61mm;
  padding: 5mm;
}

.service-card h3 {
  min-height: 15mm;
}

.project-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5mm;
}

.project-card {
  display: grid;
  grid-template-columns: 31mm 1fr;
  gap: 4mm;
  min-height: 53mm;
  padding: 4mm;
}

.project-image {
  overflow: hidden;
  border-radius: 2mm;
  background: rgba(0, 0, 0, 0.4);
}

.project-card h3 {
  font-size: 11.6pt;
}

.project-card li {
  font-size: 8.6pt;
  margin-bottom: 1.8mm;
}

.product-row {
  display: grid;
  grid-template-columns: 54mm 1fr;
  gap: 7mm;
  align-items: stretch;
  margin-top: 7mm;
}

.product-row.reverse {
  grid-template-columns: 1fr 54mm;
}

.product-image {
  overflow: hidden;
  min-height: 64mm;
  border-radius: 3mm;
  border: 1px solid rgba(255, 255, 255, 0.12);
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.callout-list {
  display: grid;
  gap: 4mm;
}

.callout {
  border-left: 1mm solid #2f9bff;
  border-radius: 2mm;
  background: rgba(47, 155, 255, 0.08);
  padding: 4mm;
}

.callout strong {
  display: block;
  margin-bottom: 1.6mm;
  color: #ffffff;
  font-size: 11pt;
}

.partner-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 4mm;
  margin-top: 7mm;
}

.partner {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 28mm;
  padding: 2mm;
  border-color: rgba(110, 198, 255, 0.14);
  background: rgba(255, 255, 255, 0.025);
  box-shadow: none;
}

.partner img {
  display: block;
  max-width: 100%;
  max-height: 14mm;
  margin: 0 auto 2mm;
  object-fit: contain;
  filter: brightness(1.35) contrast(1.06);
}

.partner span {
  color: rgba(238, 246, 255, 0.76);
  font-size: 6.5pt;
  font-weight: 800;
  line-height: 1.15;
  text-align: center;
}

.process {
  display: grid;
  gap: 4mm;
  margin-top: 7mm;
}

.step {
  display: grid;
  grid-template-columns: 13mm 1fr;
  gap: 4mm;
  align-items: start;
  padding: 4.4mm;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 3mm;
  background: rgba(255, 255, 255, 0.052);
}

.step-number {
  display: grid;
  place-items: center;
  width: 11mm;
  height: 11mm;
  border-radius: 50%;
  background: #2f9bff;
  color: #ffffff;
  font-weight: 900;
}

.step h3 {
  margin-bottom: 1.6mm;
}

.step p {
  margin-bottom: 0;
  font-size: 9.7pt;
}

.contact-card {
  margin-top: 8mm;
  padding: 8mm;
  border: 1px solid rgba(110, 198, 255, 0.32);
  border-radius: 3mm;
  background: rgba(47, 155, 255, 0.1);
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4mm;
  margin-top: 5mm;
}

.contact-item {
  padding: 4mm;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 2mm;
  background: rgba(0, 0, 0, 0.22);
}

.contact-item span {
  display: block;
  margin-bottom: 1.5mm;
  color: rgba(238, 246, 255, 0.54);
  font-size: 8pt;
  font-weight: 900;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.contact-item strong {
  color: #ffffff;
  font-size: 12pt;
  line-height: 1.35;
}

.span-2 {
  grid-column: span 2;
}

.table {
  display: grid;
  gap: 2.6mm;
  margin-top: 6mm;
}

.table-row {
  display: grid;
  grid-template-columns: 44mm 1fr;
  gap: 4mm;
  padding: 3.2mm 4mm;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 2mm;
  background: rgba(255, 255, 255, 0.045);
}

.table-row strong {
  color: #a7fff7;
  font-size: 9.5pt;
}

.table-row span {
  color: rgba(238, 246, 255, 0.72);
  font-size: 9.4pt;
  line-height: 1.35;
}

.final-logo {
  width: 62mm;
  margin-bottom: 8mm;
}
"""


def build_html() -> str:
    cover = f"""
    <section class="page cover">
      <header class="page-header">
        <div class="brand-row">{image("logo", "header-logo")}<span>Company Profile 2026</span></div>
        <span class="page-number">01</span>
      </header>
      <main>
        <div class="cover-schematic"></div>
        <div class="cover-grid">
          <div class="cover-copy">
            <p class="eyebrow">Atta Group</p>
            <h1 class="cover-title">Powering Serious Industrial Work</h1>
            <p class="cover-subtitle">DATSAN transformers, electrical infrastructure, gas systems, and field contracting support for demanding sites in Egypt.</p>
            <div class="badge-row">
              <span class="badge">Transformers first</span>
              <span class="badge">Power infrastructure</span>
              <span class="badge">Oil & gas site support</span>
              <span class="badge">Egypt / KSA / Libya focus</span>
            </div>
          </div>
          <div class="cover-visual">
            {image("transformer_detail")}
          </div>
        </div>
      </main>
    </section>
    """

    p2 = page(
        "02",
        "Current positioning",
        "Built for buyers who cannot afford weak execution.",
        f"""
        <p class="lead">Atta Group is presented today as a practical industrial supply and contracting partner, not only a general contractor. The rebuilt website moves the commercial story toward the products and systems that decide uptime: transformers, panels, industrial gases, transmission-line materials, and field execution.</p>
        <div class="grid-3 mt-8">
          {metric("2023", "Founded in Egypt with petroleum-sector contracting experience.")}
          {metric("05", "Core service lines: civil, mechanical, electrical, maintenance, transformer supply.")}
          {metric("07", "Project proof points rebuilt into sales-ready case stories.")}
        </div>
        <div class="quote-panel">
          <strong>Arabic market message</strong>
          <p class="arabic">مجموعة عطا شريك توريد وتنفيذ للمصانع ومواقع الطاقة والبترول في مصر، تركيزها على المحولات، اللوحات، المواد الكهربائية، الأعمال المدنية والميكانيكية، ودعم المواقع التي تحتاج اعتمادية حقيقية.</p>
        </div>
        """,
    )

    p3 = page(
        "03",
        "What changed",
        "The new profile turns a project list into a buyer-ready story.",
        """
        <div class="grid-2">
          <div class="panel">
            <p class="kicker">Old profile baseline</p>
            <h3>Company intro, vision, mission, projects, clients.</h3>
            <p>The original profile introduced Mohamed Atta as a contracting company founded in Egypt in 2023 with civil, mechanical, and electrical work in the petroleum sector.</p>
          </div>
          <div class="panel">
            <p class="kicker">Upgraded profile direction</p>
            <h3>Commercial positioning, products, proof, and contact path.</h3>
            <p>The upgraded profile reflects the current website: DATSAN transformer supply, electrical infrastructure, gas systems, contracting, facility maintenance, partner credibility, and clear procurement conversations.</p>
          </div>
        </div>
        <div class="table">
          <div class="table-row"><strong>Primary buyer</strong><span>Factory owners, procurement teams, maintenance managers, EPC contractors, utilities, and oil and gas operators.</span></div>
          <div class="table-row"><strong>Commercial promise</strong><span>Bring the scope, location, timeline, and technical requirement. Atta helps shape a practical supply and execution path.</span></div>
          <div class="table-row"><strong>Differentiator</strong><span>Supply and field execution can be discussed together instead of splitting responsibility across disconnected vendors.</span></div>
          <div class="table-row"><strong>Website alignment</strong><span>The PDF now matches atta-group.net: transformers first, then industrial supply, future concepts, projects, clients, and contact.</span></div>
        </div>
        """,
    )

    p4 = page(
        "04",
        "Transformer platform",
        "DATSAN transformers are now the lead offer.",
        f"""
        <p class="lead">For industrial buyers, transformer selection is a production decision. Capacity, voltage, protection, installation environment, testing, and maintenance access all affect uptime.</p>
        <div class="product-row">
          <div class="product-image">{image("transformer_detail")}</div>
          <div class="callout-list">
            <div class="callout"><strong>DATSAN distribution transformers</strong><p>Used to move incoming power into usable site voltage levels for production halls, utility buildings, workshops, warehouses, and industrial-zone facilities.</p></div>
            <div class="callout"><strong>CSP transformers</strong><p>Relevant where compact installation and self-protection are important parts of the buyer's installation plan.</p></div>
            <div class="callout"><strong>Isolation transformers</strong><p>Useful when sites need galvanic isolation, cleaner separation, or reduced risk for sensitive or safety-critical loads.</p></div>
          </div>
        </div>
        <div class="quote-panel">
          <strong>Buyer brief checklist</strong>
          <p>Load profile, current and future demand, voltage level, protection philosophy, cooling method, installation environment, test requirements, lead time, and maintenance access.</p>
        </div>
        """,
    )

    p5 = page(
        "05",
        "Electrical infrastructure",
        "Panels, materials, and line hardware protect the whole system.",
        f"""
        <div class="image-strip">
          {image("electrical")}
          {image("transmission")}
        </div>
        <div class="grid-2">
          {service_card("Electrical panels and materials", "Power / protection / distribution", ["Panel supply and organization for industrial loads", "Protection conversations tied to uptime and safety", "Electrical materials planned around project schedules", "Procurement and installation support under one commercial rhythm"])}
          {service_card("Overhead transmission-line materials", "Infrastructure / hardware / galvanizing", ["Line components and hardware for utility projects", "Fabrication and hot galvanizing support", "Civil support for transmission corridors", "Coordination between materials, access, and field readiness"])}
        </div>
        """,
    )

    p6 = page(
        "06",
        "Industrial gas systems",
        "Oxygen, nitrogen, and gas compression expand the supply story.",
        """
        <p class="lead">Modern industrial operations often depend on stable gas purity, pressure, flow, redundancy, and serviceability. The website now positions gas systems as an adjacent industrial supply lane alongside transformers and electrical infrastructure.</p>
        <div class="grid-3 mt-7">
          """ + service_card("Oxygen generators", "Purity / flow / uptime", ["For operations that need controlled oxygen availability", "Useful where bulk supply logistics create risk", "Buyer should define purity, pressure, flow, redundancy, and room conditions"]) +
          service_card("Nitrogen generators", "Blanketing / inerting / process gas", ["Relevant for industrial process support", "Procurement should confirm purity and pressure requirements", "Maintenance access and filtration quality matter"]) +
          service_card("Gas compressors", "Compression / lifecycle / service", ["Dalgakiran compressor catalog supports this lane", "Applications include natural gas, hydrogen, biogas, fuel gas, air, and mixed gases", "Buyers should compare inlet pressure, discharge pressure, driver type, duty cycle, and service plan"]) +
        """
        </div>
        <div class="quote-panel">
          <strong>Procurement signal</strong>
          <p>Gas systems should be quoted with the real operating profile: gas type, purity, pressure, flow, ambient conditions, power availability, installation space, monitoring needs, and maintenance plan.</p>
        </div>
        """,
    )

    p7 = page(
        "07",
        "Contracting services",
        "Civil, mechanical, electrical, and maintenance work are one operating layer.",
        f"""
        <div class="image-strip">
          {image("civil")}
          {image("mechanical")}
        </div>
        <div class="grid-2">
          {service_card("Civil works", "Earthworks / concrete / roads", ["Excavation and earthworks", "Concrete foundations", "Access roads and site routes", "Industrial site development around real field constraints"])}
          {service_card("Mechanical and electrical", "Pipeline / tanks / M&E", ["Pipeline welding", "Tank calibration", "Power distribution and protection", "Field installation and coordination support"])}
        </div>
        <div class="quote-panel">
          <strong>Maintenance positioning</strong>
          <p>Facility maintenance is presented as a reliability program: inspect early, repair before shutdown, protect infrastructure life, and keep operating sites moving.</p>
        </div>
        """,
    )

    p8 = page(
        "08",
        "Future technology direction",
        "GuardX and Nexus-N show where the advisory story is going.",
        f"""
        <div class="grid-2">
          <div class="panel">
            <div class="wide-image short">{image("guardx")}</div>
            <p class="kicker">GuardX AI</p>
            <h3>ESP and pump monitoring concept.</h3>
            <p>GuardX is framed as a visibility layer for pump and ESP failure signals: abnormal pattern detection, earlier maintenance decisions, and less purely reactive shutdown behavior.</p>
          </div>
          <div class="panel">
            <div class="wide-image short">{image("nexus")}</div>
            <p class="kicker">Nexus-N</p>
            <h3>Micro-reactor power concept for feasibility planning.</h3>
            <p>Nexus-N is positioned carefully as a compact long-duration baseload power concept requiring feasibility, regulation, safety, security, and specialist review before any procurement discussion.</p>
          </div>
        </div>
        <div class="quote-panel">
          <strong>Important framing</strong>
          <p>These concepts are not quick-purchase products. They give qualified industrial buyers a sharper way to discuss monitoring, reliability, and future critical-site energy planning.</p>
        </div>
        """,
    )

    p9 = page(
        "09",
        "Project proof",
        "Field experience translated into buyer evidence.",
        f"""
        <div class="project-grid">
          {project_card("Overhead transmission-line civil works and pole-tie excavation", "Power infrastructure", "transmission", ["Civil support for transmission infrastructure", "Pole-tie excavation and route readiness", "Proof for utility and energy scopes"])}
          {project_card("Mechanical works agreement", "Oil and gas", "mechanical", ["Mechanical field execution", "Fabrication and installation support", "Petroleum-site coordination"])}
          {project_card("Charging-line protection at Borg El Arab electric speed train crossing", "Transport energy interface", "borg", ["Protection works for charging-line crossings", "Civil and utility interface coordination", "Risk-aware field sequencing"])}
          {project_card("TAFLA access road construction at Abu Gharadig", "Petroleum access infrastructure", "road", ["11 KM road length", "4 M width and 25 CM thickness", "Remote field access support"])}
        </div>
        """,
    )

    p10 = page(
        "10",
        "More project proof",
        "Precision, pipeline, and fabrication capabilities.",
        f"""
        <div class="project-grid">
          {project_card("Oil tank calibration at Mare and Sand sites", "Oil storage", "tank", ["Calibration for petroleum operating sites", "Measurement confidence and asset reliability", "Technical maintenance proof point"])}
          {project_card("6-inch Schedule 80 line welding over 10 KM", "Pipeline infrastructure", "welding", ["6-inch Schedule 80 line", "10 KM route", "Mechanical support for petroleum infrastructure"])}
          {project_card("Fabrication and hot galvanizing for overhead transmission line", "Power infrastructure", "galvanizing", ["Fabrication works", "Hot galvanizing for long service life", "Transmission-line component support"])}
          {project_card("Facility maintenance across operating sites", "Lifecycle support", "maintenance", ["Routine inspections", "Repair readiness", "Civil, mechanical, and electrical asset support"])}
        </div>
        """,
    )

    p11 = page(
        "11",
        "Clients and partner ecosystem",
        "Credibility for procurement conversations.",
        f"""
        <p class="lead">The website now makes partner and client proof visible instead of leaving it buried inside a static PDF. The profile keeps that proof usable in meetings, tenders, introductions, and WhatsApp/email follow-ups.</p>
        {partner_grid()}
        <div class="quote-panel">
          <strong>Why this matters</strong>
          <p>Industrial buyers need confidence before discussing transformers, electrical materials, contracting packages, or maintenance windows. Visible client and partner signals reduce the first trust gap.</p>
        </div>
        """,
    )

    p12 = page(
        "12",
        "Buyer education",
        "The website now supports search, sales, and technical qualification.",
        """
        <p class="lead">Atta's rebuilt blog and product content give sales users a stronger way to educate buyers before quoting. The content answers practical questions around uptime, load planning, safety, gas systems, maintenance, overhead-line hardware, site support, and future energy planning.</p>
        <div class="table">
          <div class="table-row"><strong>Transformer articles</strong><span>DATSAN selection, distribution transformers, CSP transformers, isolation transformers, expansion planning, and buyer checklists.</span></div>
          <div class="table-row"><strong>Electrical articles</strong><span>Panels, protection, organized distribution, safety, and factory power infrastructure.</span></div>
          <div class="table-row"><strong>Gas system articles</strong><span>Oxygen generators, nitrogen generators, gas compressors, purity, pressure, and process reliability.</span></div>
          <div class="table-row"><strong>Maintenance articles</strong><span>Preventive maintenance, downtime reduction, failure modes, and shutdown-window planning.</span></div>
          <div class="table-row"><strong>Future concepts</strong><span>GuardX for pump/ESP visibility and Nexus-N for critical-site baseload energy feasibility conversations.</span></div>
        </div>
        """,
    )

    p13 = page(
        "13",
        "How Atta supports procurement",
        "Clear inputs lead to better supply and execution decisions.",
        """
        <div class="process">
          <div class="step"><div class="step-number">1</div><div><h3>Define the operating problem</h3><p>Is the buyer solving power capacity, protection, gas supply, maintenance, civil access, pipeline work, or mixed site execution?</p></div></div>
          <div class="step"><div class="step-number">2</div><div><h3>Collect technical requirements</h3><p>Prepare load data, drawings, site conditions, quantities, voltage, pressure, flow, route constraints, maintenance windows, or project schedule.</p></div></div>
          <div class="step"><div class="step-number">3</div><div><h3>Match products and field scope</h3><p>Connect DATSAN transformers, panels, materials, gas systems, civil works, M&E work, or facility maintenance to the real site need.</p></div></div>
          <div class="step"><div class="step-number">4</div><div><h3>Build a practical commercial path</h3><p>Clarify lead time, responsibilities, site access, inspection, documentation, handover, and after-delivery support before quoting.</p></div></div>
          <div class="step"><div class="step-number">5</div><div><h3>Keep reliability visible</h3><p>Make uptime, safety, maintenance access, and lifecycle support part of the decision, not an afterthought.</p></div></div>
        </div>
        """,
    )

    p14 = page(
        "14",
        "What to send before requesting a quote",
        "A stronger buyer brief saves time for both sides.",
        """
        <div class="grid-2">
          <div class="panel">
            <p class="kicker">For transformers and panels</p>
            """ + bullets(["Required kVA or load profile", "Incoming and outgoing voltage", "Installation environment", "Protection requirements", "Testing expectations", "Delivery location and deadline"]) + """
          </div>
          <div class="panel">
            <p class="kicker">For gas systems</p>
            """ + bullets(["Gas type", "Purity target", "Flow and pressure", "Operating hours", "Redundancy expectations", "Available power and room conditions"]) + """
          </div>
          <div class="panel">
            <p class="kicker">For civil and M&E scopes</p>
            """ + bullets(["Drawings or site photos", "Location and access constraints", "Quantity or route length", "Permit and safety requirements", "Required handover documents", "Shutdown or mobilization window"]) + """
          </div>
          <div class="panel">
            <p class="kicker">For maintenance support</p>
            """ + bullets(["Asset list", "Known failure history", "Inspection schedule", "Critical downtime windows", "Spare parts status", "Site contact and access rules"]) + """
          </div>
        </div>
        """,
    )

    p15 = page(
        "15",
        "Contact",
        "Bring the scope. Get a supply path.",
        f"""
        {image("logo", "final-logo")}
        <p class="lead">Share what you need sourced, installed, maintained, or coordinated. Atta can respond around transformer supply, electrical materials, civil works, mechanical work, gas systems, and site support.</p>
        <div class="contact-card">
          <h2>Atta Group</h2>
          <div class="contact-grid">
            <div class="contact-item"><span>Email</span><strong>info@atta-group.net</strong></div>
            <div class="contact-item"><span>Website</span><strong>atta-group.net</strong></div>
            <div class="contact-item"><span>Phone</span><strong>01214444253</strong></div>
            <div class="contact-item"><span>Phone</span><strong>01159900749</strong></div>
            <div class="contact-item span-2"><span>Address</span><strong>First Mall, First District, South 90th Street, Fifth Settlement, 2nd Floor, Cairo, Egypt</strong></div>
            <div class="contact-item span-2"><span>LinkedIn</span><strong>linkedin.com/company/atta-group-co</strong></div>
          </div>
        </div>
        """,
    )

    pages = [cover, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15]
    return f"<!doctype html><html><head><meta charset='utf-8'><title>Atta Group Company Profile</title><style>{STYLE}</style></head><body>{''.join(pages)}</body></html>"


def render_pdf() -> None:
    chrome = Path(r"C:\Program Files\Google\Chrome\Application\chrome.exe")
    if not chrome.exists():
        chrome = Path(r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe")
    if not chrome.exists():
        raise RuntimeError("Chrome or Edge was not found.")

    TMP_DIR.mkdir(parents=True, exist_ok=True)
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    HTML_PATH.write_text(build_html(), encoding="utf-8")

    subprocess.run(
        [
            str(chrome),
            "--headless=new",
            "--disable-gpu",
            "--no-pdf-header-footer",
            "--allow-file-access-from-files",
            f"--print-to-pdf={PDF_PATH}",
            str(HTML_PATH),
        ],
        check=True,
        cwd=ROOT,
    )


if __name__ == "__main__":
    render_pdf()
    print(PDF_PATH)

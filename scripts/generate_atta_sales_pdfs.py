from __future__ import annotations

import html
import subprocess
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public" / "atta"
OUTPUT_DIR = ROOT / "output" / "pdf"
TMP_DIR = ROOT / "tmp" / "pdfs" / "atta_sales_pdfs"

SALES_HTML = OUTPUT_DIR / "atta-sales-engineer-pitch-ar.html"
SALES_PDF = OUTPUT_DIR / "atta-sales-engineer-pitch-ar.pdf"
CUSTOMER_HTML = OUTPUT_DIR / "atta-customer-offerings-en.html"
CUSTOMER_PDF = OUTPUT_DIR / "atta-customer-offerings-en.pdf"


ASSETS = {
    "logo": PUBLIC / "atta-full-logo-transparent.png",
    "mark": PUBLIC / "mohamed-atta-logo-transparent.png",
    "transformer": PUBLIC / "transform-detail-2.jpeg",
    "transformer_wide": PUBLIC / "transformers.jpg",
    "electrical": PUBLIC / "electrical.jpg",
    "civil": PUBLIC / "civil-detail-1.jpg",
    "mechanical": PUBLIC / "me-detail-2.jpg",
    "transmission": PUBLIC / "project-transmission-1.jpg",
    "welding": PUBLIC / "project-welding-detail-2.jpg",
    "tank": PUBLIC / "project-tank-detail-1.jpg",
    "guardx": PUBLIC / "future" / "guardx-ai.png",
    "nexus": PUBLIC / "future" / "nexus-n-micro-reactor.png",
}

PARTNERS = [
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


def uri(path: Path) -> str:
    return path.resolve().as_uri()


def image(name: str, class_name: str = "") -> str:
    path = ASSETS[name]
    if not path.exists():
        return ""
    return f'<img class="{esc(class_name)}" src="{uri(path)}" alt="">'


def ul(items: list[str]) -> str:
    return "<ul>" + "".join(f"<li>{esc(item)}</li>" for item in items) + "</ul>"


def chip(text: str) -> str:
    return f'<span class="chip">{esc(text)}</span>'


def card(title: str, kicker: str, body: str, items: list[str] | None = None) -> str:
    points = ul(items) if items else ""
    return f"""
    <article class="card">
      <p class="kicker">{esc(kicker)}</p>
      <h3>{esc(title)}</h3>
      <p>{esc(body)}</p>
      {points}
    </article>
    """


def step(number: str, title: str, body: str) -> str:
    return f"""
    <div class="step">
      <div class="step-number">{esc(number)}</div>
      <div>
        <h3>{esc(title)}</h3>
        <p>{esc(body)}</p>
      </div>
    </div>
    """


def page(number: str, eyebrow: str, title: str, body: str, direction: str = "ltr", extra_class: str = "") -> str:
    return f"""
    <section class="page {esc(direction)} {esc(extra_class)}">
      <header class="page-header">
        <div class="brand-row">{image("logo", "header-logo")}<span>{'دليل البيع الداخلي' if direction == 'rtl' else 'Customer Offerings'}</span></div>
        <span class="page-number">{esc(number)}</span>
      </header>
      <main>
        <p class="eyebrow">{esc(eyebrow)}</p>
        <h1>{esc(title)}</h1>
        {body}
      </main>
    </section>
    """


def partner_grid() -> str:
    base = PUBLIC / "partners-transparent"
    blocks = []
    for name in PARTNERS:
        path = base / name
        if not path.exists():
            continue
        label = name.removesuffix(".png")
        label = label.split("_", 1)[1] if "_" in label else label
        label = label.replace("_", " ").title()
        blocks.append(f'<div class="partner"><img src="{uri(path)}" alt="{esc(label)}"><span>{esc(label)}</span></div>')
    return '<div class="partner-grid">' + "".join(blocks) + "</div>"


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
  font-family: "Segoe UI", Arial, sans-serif;
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
    radial-gradient(circle at 18% 8%, rgba(47,155,255,0.25), transparent 24%),
    radial-gradient(circle at 83% 20%, rgba(24,213,194,0.14), transparent 24%),
    linear-gradient(135deg, #071326 0%, #02050a 58%, #030404 100%);
}

.page::before {
  content: "";
  position: absolute;
  inset: 0;
  opacity: 0.14;
  background-image:
    linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px),
    linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px);
  background-size: 22mm 22mm;
}

.page::after {
  content: "";
  position: absolute;
  right: -42mm;
  bottom: -54mm;
  width: 108mm;
  height: 108mm;
  border-radius: 999px;
  border: 1px solid rgba(110,198,255,0.22);
  background: rgba(47,155,255,0.04);
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
  color: rgba(238,246,255,0.62);
  font-size: 8.5pt;
  font-weight: 800;
  letter-spacing: 0.13em;
  text-transform: uppercase;
}

.header-logo {
  width: 37mm;
  max-height: 11mm;
  object-fit: contain;
}

.page-number {
  color: rgba(238,246,255,0.48);
  font-size: 10pt;
  font-weight: 800;
}

main {
  padding-top: 13mm;
}

.rtl {
  direction: rtl;
  font-family: Tahoma, "Segoe UI", Arial, sans-serif;
}

.rtl .brand-row {
  letter-spacing: 0;
}

.ltr {
  direction: ltr;
}

.eyebrow,
.kicker {
  margin: 0 0 4mm;
  color: #6ec6ff;
  font-size: 8.7pt;
  font-weight: 900;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.rtl .eyebrow,
.rtl .kicker {
  letter-spacing: 0;
}

h1 {
  max-width: 157mm;
  margin: 0 0 7mm;
  color: #ffffff;
  font-size: 30pt;
  line-height: 1.02;
  letter-spacing: 0;
  text-transform: uppercase;
}

.rtl h1 {
  font-size: 29pt;
  line-height: 1.14;
  text-transform: none;
}

h2 {
  margin: 0 0 4mm;
  color: #ffffff;
  font-size: 18pt;
  line-height: 1.08;
}

h3 {
  margin: 0 0 2.4mm;
  color: #ffffff;
  font-size: 12.8pt;
  line-height: 1.22;
}

p {
  margin: 0 0 3.5mm;
  color: rgba(238,246,255,0.72);
  font-size: 10.3pt;
  line-height: 1.48;
}

.rtl p {
  font-size: 10.8pt;
  line-height: 1.65;
}

.lead {
  max-width: 150mm;
  color: rgba(238,246,255,0.78);
  font-size: 13pt;
  line-height: 1.48;
}

.rtl .lead {
  font-size: 13.2pt;
  line-height: 1.72;
}

.cover main {
  height: calc(100% - 13mm);
  padding-top: 17mm;
}

.cover-grid {
  display: grid;
  grid-template-columns: 0.94fr 1.06fr;
  gap: 10mm;
  align-items: end;
  min-height: 206mm;
}

.cover-title {
  max-width: 88mm;
  font-size: 38pt;
  line-height: 0.94;
}

.rtl .cover-title {
  font-size: 35pt;
  line-height: 1.14;
}

.cover-visual {
  height: 182mm;
  overflow: hidden;
  border: 1px solid rgba(110,198,255,0.24);
  border-radius: 4mm;
  background: rgba(0,0,0,0.28);
  box-shadow: 0 30px 100px rgba(0,0,0,0.42);
}

.cover-visual img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(0.9) contrast(1.05) brightness(0.72);
}

.chip-row {
  display: flex;
  flex-wrap: wrap;
  gap: 3mm;
  margin-top: 7mm;
}

.rtl .chip-row {
  justify-content: flex-start;
}

.chip {
  display: inline-flex;
  align-items: center;
  min-height: 9mm;
  border: 1px solid rgba(110,198,255,0.35);
  border-radius: 2mm;
  background: rgba(3,10,22,0.72);
  padding: 2mm 3.4mm;
  color: #dff7ff;
  font-size: 8.4pt;
  font-weight: 900;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.rtl .chip {
  letter-spacing: 0;
  text-transform: none;
}

.grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5mm;
}

.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4.5mm;
}

.card,
.panel,
.step,
.quote,
.partner {
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 3mm;
  background: rgba(255,255,255,0.055);
  box-shadow: 0 18px 54px rgba(0,0,0,0.22);
}

.card {
  min-height: 55mm;
  padding: 5mm;
}

.card.compact {
  min-height: auto;
}

.panel {
  padding: 6mm;
}

.quote {
  margin-top: 6mm;
  padding: 6mm;
  border-color: rgba(24,213,194,0.28);
  background: rgba(24,213,194,0.07);
}

.quote strong {
  display: block;
  margin-bottom: 2mm;
  color: #a7fff7;
  font-size: 11pt;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

li {
  position: relative;
  margin: 0 0 2.4mm;
  padding-left: 5mm;
  color: rgba(238,246,255,0.72);
  font-size: 9.3pt;
  line-height: 1.38;
}

.rtl li {
  padding-left: 0;
  padding-right: 5mm;
  font-size: 9.8pt;
  line-height: 1.56;
}

li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 2.1mm;
  width: 2mm;
  height: 2mm;
  border-radius: 999px;
  background: #18d5c2;
  box-shadow: 0 0 12px rgba(24,213,194,0.7);
}

.rtl li::before {
  left: auto;
  right: 0;
  top: 2.7mm;
}

.image-strip {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  height: 58mm;
  margin: 7mm 0;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 3mm;
  background: rgba(0,0,0,0.36);
}

.image-strip img,
.wide-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.wide-image {
  height: 61mm;
  margin: 6mm 0;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 3mm;
}

.step-list {
  display: grid;
  gap: 4mm;
  margin-top: 6mm;
}

.step {
  display: grid;
  grid-template-columns: 13mm 1fr;
  gap: 4mm;
  align-items: start;
  padding: 4.2mm;
}

.rtl .step {
  grid-template-columns: 1fr 13mm;
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

.step p {
  margin-bottom: 0;
  font-size: 9.6pt;
}

.rtl .step p {
  font-size: 10.3pt;
}

.table {
  display: grid;
  gap: 2.6mm;
  margin-top: 6mm;
}

.row {
  display: grid;
  grid-template-columns: 45mm 1fr;
  gap: 4mm;
  padding: 3.2mm 4mm;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 2mm;
  background: rgba(255,255,255,0.045);
}

.rtl .row {
  grid-template-columns: 1fr 45mm;
}

.row strong {
  color: #a7fff7;
  font-size: 9.5pt;
}

.row span {
  color: rgba(238,246,255,0.72);
  font-size: 9.4pt;
  line-height: 1.4;
}

.rtl .row span {
  font-size: 10pt;
  line-height: 1.58;
}

.partner-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 4mm;
  margin-top: 6mm;
}

.partner {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 25mm;
  padding: 2mm;
  border-color: rgba(110,198,255,0.14);
  background: rgba(255,255,255,0.025);
  box-shadow: none;
}

.partner img {
  display: block;
  max-width: 100%;
  max-height: 13mm;
  margin: 0 auto 2mm;
  object-fit: contain;
  filter: brightness(1.35) contrast(1.06);
}

.partner span {
  color: rgba(238,246,255,0.76);
  font-size: 6.4pt;
  font-weight: 800;
  line-height: 1.15;
  text-align: center;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4mm;
  margin-top: 5mm;
}

.contact-item {
  padding: 4mm;
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 2mm;
  background: rgba(0,0,0,0.22);
}

.contact-item span {
  display: block;
  margin-bottom: 1.4mm;
  color: rgba(238,246,255,0.54);
  font-size: 8pt;
  font-weight: 900;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.contact-item strong {
  color: #ffffff;
  font-size: 11.7pt;
  line-height: 1.35;
}

.span-2 {
  grid-column: span 2;
}

.small {
  font-size: 8.8pt;
}

.mt-6 {
  margin-top: 6mm;
}

.mt-8 {
  margin-top: 8mm;
}
"""


def sales_ar_html() -> str:
    cover = f"""
    <section class="page rtl cover">
      <header class="page-header">
        <div class="brand-row">{image("logo", "header-logo")}<span>دليل البيع الداخلي</span></div>
        <span class="page-number">01</span>
      </header>
      <main>
        <div class="cover-grid">
          <div>
            <p class="eyebrow">للمهندس البيعي</p>
            <h1 class="cover-title">إزاي تبيع عروض عطا بثقة ومن غير كلام كبير</h1>
            <p class="lead">دليل سريع تستخدمه في المكالمات، الزيارات، واتساب، والاجتماعات. الهدف إن العميل يفهم القيمة بسرعة: توريد مضبوط، تنفيذ ميداني، ومتابعة تقلل التعطيل.</p>
            <div class="chip-row">
              {chip("محولات DATSAN")}
              {chip("لوحات ومواد كهرباء")}
              {chip("غازات صناعية")}
              {chip("مقاولات وصيانة")}
            </div>
          </div>
          <div class="cover-visual">{image("transformer")}</div>
        </div>
      </main>
    </section>
    """

    p2 = page(
        "02",
        "التمركز",
        "الجملة الأساسية اللي لازم تتقال",
        f"""
        <p class="lead">إحنا في مجموعة عطا بنساعد المصانع ومواقع البترول والطاقة في مصر إنها تجهز احتياجاتها الصناعية من المحولات، اللوحات، المواد الكهربائية، أنظمة الغازات، والأعمال المدنية والميكانيكية والكهربائية من خلال شريك فاهم التوريد والتنفيذ مع بعض.</p>
        <div class="quote">
          <strong>Pitch قصير</strong>
          <p>لو عندك توسع، عطل متكرر، مشروع جديد، أو احتياج توريد فني، إحنا بنبدأ من المشكلة التشغيلية ونوصلها لحل عملي: مواصفات أوضح، توريد مناسب، وتنفيذ أو دعم موقعي حسب الحاجة.</p>
        </div>
        <div class="grid-3 mt-6">
          {card("نبيع نتيجة مش منتج بس", "الفكرة", "الكلام دايما يتربط بالتشغيل: وقت توقف أقل، أمان أعلى، ومشتريات أوضح.", ["اسأل عن المشكلة قبل المنتج", "اربط العرض بالتعطيل أو التوسع", "خلي الخطوة الجاية واضحة"])}
          {card("اتكلم بلغة العميل", "النبرة", "صاحب المصنع مش عايز محاضرة هندسية. عايز يعرف هيوفر وقت، يقلل خطر، ويستلم صح.", ["بسيط وواضح", "أمثلة من الموقع", "من غير مبالغة"])}
          {card("متوعدش بحاجة مش مؤكدة", "الحدود", "خصوصا في GuardX وNexus-N. دول يتفتحوا كاتجاه تقني أو دراسة جدوى، مش وعد بيع سريع.", ["قول concept أو feasibility", "ما تقولش جاهز للتنفيذ فورا", "اسأل الأول عن حالة العميل"])}
        </div>
        """,
        "rtl",
    )

    p3 = page(
        "03",
        "أسئلة الاكتشاف",
        "قبل ما تعرض، افهم الموقع",
        """
        <div class="grid-2">
          """ + card("لو العميل محتاج محول أو لوحة", "اسأل", "هدفك تعرف الحمل الحقيقي والمخاطر.", ["الحمل الحالي كام؟ وفي توسع قريب؟", "الجهد الداخل والخارج؟", "في أعطال أو فصل متكرر؟", "المحول أو اللوحة فين ومين هيعمل الصيانة؟", "في رسومات أو single line diagram؟"]) +
          card("لو العميل محتاج غازات أو ضواغط", "اسأل", "ركز على النقاوة والضغط والتشغيل.", ["الغاز المطلوب إيه؟ أكسجين ولا نيتروجين ولا غاز تاني؟", "النقاوة والضغط والتدفق المطلوب كام؟", "التشغيل كام ساعة في اليوم؟", "في backup ولا لازم redundancy؟", "المساحة والتهوية والكهرباء متاحة؟"]) +
          card("لو العميل عنده أعمال موقع", "اسأل", "اعرف القيود قبل السعر.", ["الموقع فين؟ والدخول سهل ولا محتاج تصاريح؟", "الأعمال مدنية ولا ميكانيكية ولا كهرباء؟", "في shutdown window؟", "في صور أو BOQ أو رسومات؟", "مين مسؤول الاستلام والجودة؟"]) +
          card("لو العميل بيشتكي من أعطال", "اسأل", "حوّل الشكوى لخطة صيانة.", ["الأعطال بتتكرر إمتى؟", "آخر صيانة كانت إمتى؟", "في سجل أعطال؟", "إيه أكتر أصل لو وقف هيعطل الإنتاج؟", "محتاجين فحص مرة واحدة ولا برنامج دوري؟"]) + """
        </div>
        """,
        "rtl",
    )

    p4 = page(
        "04",
        "مسارات العروض",
        "إزاي تشرح كل عرض بسرعة",
        f"""
        <div class="image-strip">{image("transformer")}{image("electrical")}</div>
        <div class="grid-2">
          {card("محولات DATSAN", "Talk track", "المحول مش قطعة مشتريات عادية. دا قلب التغذية في الموقع. لو اختياره غلط، التوسع والإنتاج والصيانة كلهم هيتأثروا.", ["اربطه بالتحميل والتوسع", "اسأل عن الحماية والاختبارات", "أكد إن السعر لازم يكون مبني على مواصفة واضحة"])}
          {card("لوحات ومواد كهربائية", "Talk track", "اللوحة المنظمة والحماية الصح بتفرق في الأمان وتقليل الفصل وتسهيل الصيانة.", ["اتكلم عن التوزيع والحماية", "اسأل عن الأحمال والمسارات", "اربط التوريد بجدول المشروع"])}
        </div>
        """,
        "rtl",
    )

    p5 = page(
        "05",
        "غازات صناعية",
        "الأكسجين والنيتروجين والضواغط",
        """
        <div class="grid-3">
          """ + card("مولدات أكسجين", "متى تبيعها", "لما العميل محتاج توفر أكسجين مستقر بدل اعتماد مرهق على الإمداد الخارجي.", ["اسأل عن النقاوة", "اسأل عن الضغط والتدفق", "اسأل عن ساعات التشغيل"]) +
          card("مولدات نيتروجين", "متى تبيعها", "للتطبيقات اللي محتاجة inerting أو blanketing أو دعم عملية صناعية بنقاوة ثابتة.", ["حدد التطبيق", "راجع filtration", "اسأل عن redundancy"]) +
          card("ضواغط غاز", "متى تبيعها", "لما العميل عنده احتياج ضغط غاز صناعي أو تشغيل مرتبط بالبترول والغاز أو process utilities.", ["نوع الغاز", "ضغط الدخول والخروج", "driver type وخطة الصيانة"]) + """
        </div>
        <div class="quote">
          <strong>جملة مهمة</strong>
          <p>ماينفعش نسعر نظام غازات من غير بيانات تشغيل. أقل حاجة محتاجين نوع الغاز، النقاوة، الضغط، التدفق، ساعات التشغيل، ومساحة التركيب.</p>
        </div>
        """,
        "rtl",
    )

    p6 = page(
        "06",
        "خدمات الموقع",
        "مدني وميكانيكا وكهرباء وصيانة",
        f"""
        <div class="image-strip">{image("civil")}{image("mechanical")}</div>
        <div class="grid-2">
          {card("الأعمال المدنية", "متى تفتحها", "لما المشروع محتاج تجهيز موقع، حفر، خرسانة، طرق وصول، أو دعم بنية تحتية.", ["اسأل عن الرسومات", "راجع الوصول للموقع", "حدد القيود والتصاريح"])}
          {card("ميكانيكا وكهرباء", "متى تفتحها", "لما العميل محتاج لحام خطوط، معايرة، تركيبات، توزيع كهرباء، أو تنسيق بين أكتر من تخصص.", ["افهم نطاق العمل", "اسأل عن window التنفيذ", "حدد الاستلام والجودة"])}
          {card("صيانة منشآت", "متى تفتحها", "لما العميل عنده أعطال متكررة أو أصول حرجة محتاجة متابعة بدل رد فعل بعد العطل.", ["اعرف سجل الأعطال", "حدد الأصول الحرجة", "اقترح فحص ثم خطة"])}
          {card("مواد خطوط هوائية", "متى تفتحها", "لما العميل شغال في بنية طاقة أو utility project ومحتاج مواد وتجهيزات وتنسيق موقع.", ["مواد وخامات", "تصنيع وجلفنة", "دعم مدني للمسار"])}
        </div>
        """,
        "rtl",
    )

    p7 = page(
        "07",
        "التقنيات المستقبلية",
        "الكلام الصح عن التقنيات المستقبلية",
        f"""
        <div class="grid-2">
          <div class="panel">
            <div class="wide-image">{image("guardx")}</div>
            <h3>GuardX AI</h3>
            <p>اتكلم عنه كفكرة monitoring تساعد فرق التشغيل تشوف إشارات abnormal في المضخات أو ESP بدري، بدل ما كل حاجة تبقى بعد التوقف.</p>
            {ul(["مش بديل لفريق الصيانة", "مش وعد يمنع كل الأعطال", "افتحه مع عملاء عندهم أصول حرجة وبيانات تشغيل"])}
          </div>
          <div class="panel">
            <div class="wide-image">{image("nexus")}</div>
            <h3>Nexus-N</h3>
            <p>اتكلم عنه كـ feasibility conversation لطاقة baseload طويلة المدى في المواقع الحرجة. لازم تقول إن أي نقاش محتاج جهات متخصصة ومسار تنظيمي واضح.</p>
            {ul(["مش مولد ديزل", "مش قرار شراء سريع", "ممنوع وعود تشغيل أو ترخيص من غير دراسة"])}
          </div>
        </div>
        """,
        "rtl",
    )

    p8 = page(
        "08",
        "التعامل مع الاعتراضات",
        "ردود جاهزة بس من غير ضغط",
        """
        <div class="table">
          <div class="row"><span>السعر عالي.</span><strong>ممكن نقارن السعر، بس لازم نقارن على نفس المواصفة ونفس الاختبارات ونفس جدول التوريد. الأرخص لو عطل الإنتاج هيبقى أغلى.</strong></div>
          <div class="row"><span>إحنا عندنا مورد.</span><strong>تمام، خلينا نبقى option إضافي للمشاريع اللي محتاجة سرعة أو مواصفة واضحة أو توريد وتنفيذ مع بعض.</strong></div>
          <div class="row"><span>ابعت عرض وخلاص.</span><strong>أقدر أبعت، بس لو من غير بيانات تشغيل هيبقى عرض عام. الأفضل ناخد 10 دقايق نثبت الحمل أو النقاوة أو نطاق الموقع.</strong></div>
          <div class="row"><span>مش محتاجين دلوقتي.</span><strong>مفهوم. هل في توسع أو صيانة أو shutdown قريب؟ ممكن نجهز قائمة بيانات بسيطة عشان لما الوقت ييجي نبقى أسرع.</strong></div>
          <div class="row"><span>إيه الفرق بينكم وبين غيركم؟</span><strong>إحنا بنجمع بين فهم التوريد الفني والتنفيذ الميداني. يعني بنتكلم في المنتج وتأثيره على الموقع، مش مجرد كتالوج وسعر.</strong></div>
        </div>
        """,
        "rtl",
    )

    p9 = page(
        "09",
        "واتساب وفولو أب",
        "رسائل قصيرة تفتح الباب",
        """
        <div class="grid-2">
          """ + card("بعد أول مكالمة", "Template", "أستاذ/باشمهندس [الاسم]، تشرفت بالكلام مع حضرتك. حسب اللي فهمته إن الاحتياج مرتبط بـ [محول/لوحات/غاز/صيانة]. عشان نجهز عرض مظبوط، محتاجين [بيانات محددة]. هبعت لحضرتك checklist بسيطة.", []) +
          card("بعد زيارة موقع", "Template", "باشمهندس [الاسم]، شكرا على وقت حضرتك في الزيارة. مبدئيا شايفين إن الأولوية في [النقطة]. هنراجع البيانات والصور ونرجع بخطوة واضحة: مواصفة/عرض/زيارة فنية حسب الأنسب.", []) +
          card("لو العميل ساكت", "Template", "باشمهندس [الاسم]، براجع مع حضرتك بخصوص [الموضوع]. هل نثبت مكالمة 10 دقايق عشان نقفل البيانات المطلوبة للعرض؟", []) +
          card("بعد إرسال العرض", "Template", "أستاذ/باشمهندس [الاسم]، تم إرسال العرض. أهم نقطتين للمراجعة: [نقطة 1] و[نقطة 2]. لو مناسب نعمل مكالمة قصيرة نشرح المواصفة ونرد على أي أسئلة.", []) + """
        </div>
        """,
        "rtl",
    )

    p10 = page(
        "10",
        "مسار الاجتماع",
        "من أول دقيقة لحد الخطوة الجاية",
        """
        <div class="step-list">
          """ + step("1", "افتتاح بسيط", "إحنا جايين نفهم احتياجكم ونشوف هل نقدر نساعد بتوريد أو تنفيذ أو دعم موقعي مناسب.") +
          step("2", "تأهيل سريع", "اسأل عن التشغيل، المشكلة، الجدول، الموقع، الميزانية التقريبية لو متاحة، وصاحب القرار.") +
          step("3", "ربط العرض بالمشكلة", "ما تبدأش بالمنتج. ابدأ بتأثير المشكلة: توقف، توسع، أمان، صيانة، أو ضغط مشتريات.") +
          step("4", "تحديد البيانات الناقصة", "اطلع بقائمة واضحة: رسومات، أحمال، نقاوة، ضغط، صور، BOQ، أو موعد زيارة.") +
          step("5", "اقفل بخطوة محددة", "اتفق على موعد إرسال البيانات، زيارة، مكالمة فنية، أو عرض مبدئي. ما تسيبش الاجتماع مفتوح.") + """
        </div>
        """,
        "rtl",
    )

    p11 = page(
        "11",
        "Checklist العرض",
        "قبل ما تطلب تسعير",
        """
        <div class="grid-2">
          """ + card("محولات ولوحات", "بيانات مطلوبة", "من غير البيانات دي العرض هيبقى عام.", ["kVA أو load profile", "جهد الدخول والخروج", "بيئة التركيب", "الحماية والاختبارات", "الموقع وموعد التسليم"]) +
          card("غازات وضواغط", "بيانات مطلوبة", "حدد التشغيل قبل الاختيار.", ["نوع الغاز", "النقاوة", "الضغط والتدفق", "ساعات التشغيل", "المساحة والكهرباء المتاحة"]) +
          card("أعمال موقع", "بيانات مطلوبة", "الموقع هو اللي بيحدد صعوبة التنفيذ.", ["صور أو رسومات", "BOQ لو موجود", "تصاريح وسلامة", "نافذة التنفيذ", "شروط الاستلام"]) +
          card("صيانة", "بيانات مطلوبة", "اعرف التاريخ قبل ما تقترح علاج.", ["قائمة الأصول", "سجل الأعطال", "آخر صيانة", "الأصول الحرجة", "قطع الغيار المتاحة"]) + """
        </div>
        """,
        "rtl",
    )

    p12 = page(
        "12",
        "ممنوعات البيع",
        "حاجات ماينفعش تتقال",
        """
        <div class="table">
          <div class="row"><span>ما تقولش: أرخص سعر.</span><strong>قول: عرض مبني على مواصفة واضحة وقيمة تشغيلية.</strong></div>
          <div class="row"><span>ما تقولش: هنحل أي مشكلة.</span><strong>قول: نحتاج نفهم البيانات ونحدد أنسب مسار.</strong></div>
          <div class="row"><span>ما تقولش: Nexus-N جاهز للبيع.</span><strong>قول: دا concept يحتاج feasibility وتنظيم وجهات متخصصة.</strong></div>
          <div class="row"><span>ما تقولش: GuardX يمنع الأعطال.</span><strong>قول: يساعد في رؤية إشارات مبكرة وتحسين قرار الصيانة.</strong></div>
          <div class="row"><span>ما تبعتش عرض ناقص.</span><strong>اطلب البيانات الأول أو اكتب بوضوح إن العرض مبدئي ومحتاج تأكيد.</strong></div>
        </div>
        <div class="quote">
          <strong>قاعدة أخيرة</strong>
          <p>البيع الصح هنا مش ضغط. البيع الصح إنك تفهم الموقع وتخلي العميل يحس إن عطا شريك فاهم التشغيل قبل ما يكون مورد.</p>
        </div>
        """,
        "rtl",
    )

    return html_doc("Atta Sales Engineer Pitch AR", cover + p2 + p3 + p4 + p5 + p6 + p7 + p8 + p9 + p10 + p11 + p12)


def customer_en_html() -> str:
    cover = f"""
    <section class="page ltr cover">
      <header class="page-header">
        <div class="brand-row">{image("logo", "header-logo")}<span>Customer Offerings</span></div>
        <span class="page-number">01</span>
      </header>
      <main>
        <div class="cover-grid">
          <div>
            <p class="eyebrow">Atta Group</p>
            <h1 class="cover-title">Industrial Supply & Field Support</h1>
            <p class="lead">A practical partner for DATSAN transformers, electrical infrastructure, industrial gas systems, civil works, mechanical and electrical contracting, and maintenance support in Egypt.</p>
            <div class="chip-row">
              {chip("Transformer supply")}
              {chip("Electrical systems")}
              {chip("Gas systems")}
              {chip("Site execution")}
            </div>
          </div>
          <div class="cover-visual">{image("transformer")}</div>
        </div>
      </main>
    </section>
    """

    p2 = page(
        "02",
        "Overview",
        "What Atta Group helps industrial buyers solve",
        """
        <p class="lead">Atta Group supports industrial buyers who need reliable technical supply and field execution. The offer is built around uptime, safer infrastructure, clearer procurement, and practical site coordination.</p>
        <div class="grid-3 mt-6">
          """ + card("Power reliability", "Transformers and panels", "DATSAN transformers, distribution transformers, CSP transformers, isolation transformers, electrical panels, and materials for industrial power systems.", ["Load planning", "Protection", "Maintenance access"]) +
          card("Industrial utilities", "Gas systems", "Oxygen generators, nitrogen generators, and gas compressors for operations that need stable gas availability, pressure, purity, and serviceability.", ["Purity", "Flow", "Lifecycle service"]) +
          card("Field execution", "Contracting and maintenance", "Civil works, mechanical and electrical contracting, overhead-line materials, and facility maintenance support for active industrial and energy sites.", ["Site access", "Coordination", "Handover"]) + """
        </div>
        """,
        "ltr",
    )

    p3 = page(
        "03",
        "Transformer Supply",
        "DATSAN transformers for serious industrial loads",
        f"""
        <p class="lead">Transformer selection affects production capacity, safety, maintenance, and future expansion. Atta helps buyers frame the requirement before the purchase decision becomes a site bottleneck.</p>
        <div class="image-strip">{image("transformer")}{image("transformer_wide")}</div>
        <div class="grid-3">
          {card("Distribution transformers", "Core supply", "For factories, utility buildings, workshops, warehouses, and industrial-zone facilities that need dependable voltage transformation.", ["Capacity and voltage review", "Delivery path", "Site fit"])}
          {card("CSP transformers", "Self-protected options", "Relevant where compact installation and integrated protection are important parts of the buyer's requirement.", ["Protection", "Installation constraints", "Maintenance access"])}
          {card("Isolation transformers", "Separation and safety", "Useful when a site needs circuit separation, shock-risk reduction, or cleaner separation for sensitive loads.", ["Load type", "Risk profile", "Electrical environment"])}
        </div>
        """,
        "ltr",
    )

    p4 = page(
        "04",
        "Electrical Infrastructure",
        "Panels, materials, and line hardware",
        f"""
        <div class="image-strip">{image("electrical")}{image("transmission")}</div>
        <div class="grid-2">
          {card("Electrical panels and materials", "Power distribution", "Modern electrical infrastructure is not only equipment. It is the way loads are organized, protected, maintained, and expanded.", ["Power distribution", "Protection systems", "Electrical materials", "Project-timed procurement"])}
          {card("Overhead transmission-line materials", "Infrastructure support", "Atta's project proof includes transmission-line civil works, pole-tie excavation, fabrication, and hot galvanizing support.", ["Line hardware", "Fabrication", "Hot galvanizing", "Civil coordination"])}
        </div>
        """,
        "ltr",
    )

    p5 = page(
        "05",
        "Industrial Gas Systems",
        "Oxygen, nitrogen, and gas compression",
        """
        <p class="lead">Gas systems should be specified around the actual operating profile: gas type, purity, pressure, flow, duty cycle, installation environment, and maintenance plan.</p>
        <div class="grid-3 mt-6">
          """ + card("Oxygen generators", "Controlled availability", "For operations that need stable oxygen supply and want to reduce dependence on external logistics where appropriate.", ["Purity target", "Flow and pressure", "Backup expectations"]) +
          card("Nitrogen generators", "Process support", "For industrial processes that need nitrogen for blanketing, inerting, or other controlled process uses.", ["Application", "Filtration", "Maintenance access"]) +
          card("Gas compressors", "Compression and lifecycle", "For gas compression requirements across industrial, oil and gas, petrochemical, and utility-adjacent applications.", ["Gas type", "Inlet and discharge pressure", "Driver and service plan"]) + """
        </div>
        """,
        "ltr",
    )

    p6 = page(
        "06",
        "Contracting and Maintenance",
        "Field support for demanding sites",
        f"""
        <div class="image-strip">{image("civil")}{image("mechanical")}</div>
        <div class="grid-2">
          {card("Civil works", "Earthworks, concrete, roads", "Site preparation, excavation, foundations, access roads, and civil packages for industrial, utility, and energy environments.", ["Excavation", "Concrete foundations", "Access roads", "Site development"])}
          {card("Mechanical and electrical contracting", "Installation and coordination", "Field teams for mechanical scopes, welding, calibration, electrical installation, and mixed M&E coordination.", ["Pipeline welding", "Tank calibration", "Electrical installation", "Field coordination"])}
          {card("Facility maintenance", "Reliability support", "Maintenance planning, inspections, repairs, and lifecycle support to reduce downtime exposure and protect operating assets.", ["Routine inspections", "Repair readiness", "Asset lifecycle", "Site support"])}
          {card("Oil and gas site support", "Operational discipline", "Support for petroleum-sector sites where permit discipline, material readiness, supervision, and communication shape the result.", ["Shutdown windows", "Safety planning", "Material readiness", "Documentation"]) }
        </div>
        """,
        "ltr",
    )

    p7 = page(
        "07",
        "Project Proof",
        "Examples of relevant field experience",
        f"""
        <div class="grid-2">
          {card("Transmission-line civil works", "Power infrastructure", "Civil works for overhead transmission-line infrastructure, including excavation for pole ties.", ["Route readiness", "Utility coordination", "Field execution"])}
          {card("6-inch Schedule 80 line welding", "Pipeline infrastructure", "Welding works for a 6-inch Schedule 80 line over 10 KM in Abu Al-Gharadiq area.", ["Pipeline welding", "Petroleum field support", "Long-route execution"])}
          {card("TAFLA access road", "Civil infrastructure", "Construction of an 11 KM access road, 4 M width, and 25 CM thickness at Abu Gharadig site.", ["Remote access", "Civil delivery", "Measurable scope"])}
          {card("Oil tank calibration", "Oil storage", "Calibration work for oil tanks at Mare and Sand sites, supporting measurement confidence and asset reliability.", ["Calibration", "Petroleum operations", "Technical maintenance"])}
        </div>
        <div class="wide-image">{image("welding")}</div>
        """,
        "ltr",
    )

    p8 = page(
        "08",
        "Innovation Direction",
        "Monitoring and future energy planning concepts",
        f"""
        <div class="grid-2">
          <div class="panel">
            <div class="wide-image">{image("guardx")}</div>
            <h3>GuardX AI monitoring concept</h3>
            <p>GuardX is positioned as a monitoring concept for visibility into ESP and pump failure signals, abnormal pattern detection, and earlier maintenance decisions.</p>
          </div>
          <div class="panel">
            <div class="wide-image">{image("nexus")}</div>
            <h3>Nexus-N micro-reactor power concept</h3>
            <p>Nexus-N belongs in feasibility-level discussions for compact, long-duration baseload power planning at critical sites. It requires specialist, regulatory, and safety review.</p>
          </div>
        </div>
        <div class="quote">
          <strong>Careful positioning</strong>
          <p>These concepts are not presented as quick-purchase products. They are used to support serious conversations about monitoring, reliability, and future energy planning.</p>
        </div>
        """,
        "ltr",
    )

    p9 = page(
        "09",
        "Quote Request Checklist",
        "What to prepare before asking for a proposal",
        """
        <div class="grid-2">
          """ + card("Transformers and panels", "Required inputs", "Useful information for a more accurate technical and commercial response.", ["Required kVA or load profile", "Incoming and outgoing voltage", "Installation environment", "Protection requirements", "Delivery location and deadline"]) +
          card("Gas systems", "Required inputs", "Gas systems should be reviewed around the real operating profile.", ["Gas type", "Purity target", "Flow and pressure", "Operating hours", "Available power and room conditions"]) +
          card("Civil and M&E scopes", "Required inputs", "Field work depends on site access, drawings, quantities, and schedule constraints.", ["Drawings or site photos", "Location and access constraints", "Quantity or route length", "Permit and safety requirements", "Shutdown or mobilization window"]) +
          card("Maintenance support", "Required inputs", "Maintenance planning starts with the asset condition and downtime risk.", ["Asset list", "Known failure history", "Inspection schedule", "Critical downtime windows", "Spare parts status"]) + """
        </div>
        """,
        "ltr",
    )

    p10 = page(
        "10",
        "Clients, Partners, and Contact",
        "Start with the scope. Atta will help shape the path.",
        f"""
        <p class="lead">Share what you need sourced, installed, maintained, or coordinated. Atta can respond around transformer supply, electrical materials, gas systems, civil works, mechanical work, and site support.</p>
        {partner_grid()}
        <div class="contact-grid mt-8">
          <div class="contact-item"><span>Email</span><strong>info@atta-group.net</strong></div>
          <div class="contact-item"><span>Website</span><strong>atta-group.net</strong></div>
          <div class="contact-item"><span>Phone</span><strong>01214444253</strong></div>
          <div class="contact-item"><span>Phone</span><strong>01159900749</strong></div>
          <div class="contact-item span-2"><span>Address</span><strong>First Mall, First District, South 90th Street, Fifth Settlement, 2nd Floor, Cairo, Egypt</strong></div>
          <div class="contact-item span-2"><span>LinkedIn</span><strong>linkedin.com/company/atta-group-co</strong></div>
        </div>
        """,
        "ltr",
    )

    return html_doc("Atta Customer Offerings EN", cover + p2 + p3 + p4 + p5 + p6 + p7 + p8 + p9 + p10)


def html_doc(title: str, body: str) -> str:
    return f"<!doctype html><html><head><meta charset='utf-8'><title>{esc(title)}</title><style>{STYLE}</style></head><body>{body}</body></html>"


def print_pdf(html_path: Path, pdf_path: Path) -> None:
    chrome = Path(r"C:\Program Files\Google\Chrome\Application\chrome.exe")
    if not chrome.exists():
        chrome = Path(r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe")
    if not chrome.exists():
        raise RuntimeError("Chrome or Edge was not found.")

    subprocess.run(
        [
            str(chrome),
            "--headless=new",
            "--disable-gpu",
            "--no-pdf-header-footer",
            "--allow-file-access-from-files",
            f"--print-to-pdf={pdf_path}",
            str(html_path),
        ],
        check=True,
        cwd=ROOT,
    )


def generate() -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    TMP_DIR.mkdir(parents=True, exist_ok=True)

    SALES_HTML.write_text(sales_ar_html(), encoding="utf-8")
    CUSTOMER_HTML.write_text(customer_en_html(), encoding="utf-8")

    print_pdf(SALES_HTML, SALES_PDF)
    print_pdf(CUSTOMER_HTML, CUSTOMER_PDF)

    print(SALES_PDF)
    print(CUSTOMER_PDF)


if __name__ == "__main__":
    generate()

from __future__ import annotations

import html
import re
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import Flowable, Image, PageBreak, Paragraph, SimpleDocTemplate, Spacer


ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "CUSTOMER_OFFER_AND_SCRIPT.md"
OUTPUT_DIR = ROOT / "output" / "pdf"
OUTPUT = OUTPUT_DIR / "sierra-tech-spaces-customer-offer-and-script.pdf"
LOGO = ROOT / "STS_Logo_Gold_Outlined_Transparent.png"

NAVY = colors.HexColor("#0B1426")
SLATE = colors.HexColor("#1E293B")
TEAL = colors.HexColor("#06B6D4")
GOLD = colors.HexColor("#D9B45F")
MUTED = colors.HexColor("#64748B")
LIGHT_BG = colors.HexColor("#F7FAFC")
RULE = colors.HexColor("#D7DEE8")


class AccentRule(Flowable):
    def __init__(self, width: float = 4.8 * inch, height: float = 2):
        super().__init__()
        self.width = width
        self.height = height

    def draw(self) -> None:
        self.canv.setStrokeColor(TEAL)
        self.canv.setLineWidth(self.height)
        self.canv.line(0, 0, self.width * 0.42, 0)
        self.canv.setStrokeColor(GOLD)
        self.canv.line(self.width * 0.44, 0, self.width, 0)


class SectionRule(Flowable):
    def __init__(self, width: float = 6.7 * inch):
        super().__init__()
        self.width = width
        self.height = 1

    def draw(self) -> None:
        self.canv.setStrokeColor(RULE)
        self.canv.setLineWidth(0.5)
        self.canv.line(0, 0, self.width, 0)


def md_inline(text: str) -> str:
    text = html.escape(text)
    text = re.sub(r"\*\*(.+?)\*\*", r"<b>\1</b>", text)
    return text


def make_styles() -> dict[str, ParagraphStyle]:
    base = getSampleStyleSheet()
    return {
        "title": ParagraphStyle(
            "Title",
            parent=base["Title"],
            fontName="Helvetica-Bold",
            fontSize=26,
            leading=31,
            textColor=NAVY,
            alignment=TA_CENTER,
            spaceAfter=14,
        ),
        "subtitle": ParagraphStyle(
            "Subtitle",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=11,
            leading=16,
            textColor=SLATE,
            alignment=TA_CENTER,
            spaceAfter=18,
        ),
        "h2": ParagraphStyle(
            "H2",
            parent=base["Heading2"],
            fontName="Helvetica-Bold",
            fontSize=16,
            leading=21,
            textColor=NAVY,
            spaceBefore=16,
            spaceAfter=8,
            keepWithNext=True,
        ),
        "h3": ParagraphStyle(
            "H3",
            parent=base["Heading3"],
            fontName="Helvetica-Bold",
            fontSize=12.5,
            leading=16,
            textColor=TEAL,
            spaceBefore=10,
            spaceAfter=5,
            keepWithNext=True,
        ),
        "body": ParagraphStyle(
            "Body",
            parent=base["BodyText"],
            fontName="Helvetica",
            fontSize=9.7,
            leading=14.2,
            textColor=SLATE,
            spaceAfter=6,
        ),
        "quote": ParagraphStyle(
            "Quote",
            parent=base["BodyText"],
            fontName="Helvetica-Oblique",
            fontSize=10.5,
            leading=15.5,
            leftIndent=18,
            rightIndent=18,
            textColor=NAVY,
            borderColor=TEAL,
            borderWidth=1.5,
            borderPadding=8,
            backColor=LIGHT_BG,
            spaceBefore=6,
            spaceAfter=8,
        ),
        "bullet": ParagraphStyle(
            "Bullet",
            parent=base["BodyText"],
            fontName="Helvetica",
            fontSize=9.5,
            leading=13.5,
            textColor=SLATE,
            leftIndent=4,
        ),
        "footer": ParagraphStyle(
            "Footer",
            parent=base["Normal"],
            fontName="Helvetica",
            fontSize=7.5,
            leading=9,
            textColor=MUTED,
            alignment=TA_LEFT,
        ),
    }


def flush_list(
    story: list,
    items: list[str],
    styles: dict[str, ParagraphStyle],
    ordered: bool = False,
) -> None:
    if not items:
        return
    for index, item in enumerate(items, start=1):
        marker = f"{index}." if ordered else "-"
        story.append(Paragraph(f'<font color="#06B6D4"><b>{marker}</b></font> {md_inline(item)}', styles["bullet"]))
    story.append(Spacer(1, 4))


def build_story(markdown: str) -> list:
    styles = make_styles()
    story: list = []
    pending_bullets: list[str] = []
    pending_numbers: list[str] = []
    title_seen = False

    def flush_pending() -> None:
        nonlocal pending_bullets, pending_numbers
        flush_list(story, pending_bullets, styles, ordered=False)
        flush_list(story, pending_numbers, styles, ordered=True)
        pending_bullets = []
        pending_numbers = []

    for raw in markdown.splitlines():
        line = raw.strip()

        if not line:
            flush_pending()
            story.append(Spacer(1, 3))
            continue

        if line == "---":
            flush_pending()
            story.append(Spacer(1, 6))
            story.append(SectionRule())
            story.append(Spacer(1, 8))
            continue

        if line.startswith("- "):
            pending_bullets.append(line[2:].strip())
            continue

        numbered = re.match(r"^\d+\.\s+(.+)$", line)
        if numbered:
            pending_numbers.append(numbered.group(1).strip())
            continue

        flush_pending()

        if line.startswith("# "):
            if title_seen:
                story.append(PageBreak())
            title_seen = True
            if LOGO.exists():
                logo = Image(str(LOGO), width=1.25 * inch, height=1.25 * inch)
                logo.hAlign = "CENTER"
                story.append(Spacer(1, 10))
                story.append(logo)
                story.append(Spacer(1, 12))
            story.append(Paragraph(md_inline(line[2:]), styles["title"]))
            story.append(
                Paragraph(
                    "Customer offer, pain-point discovery flow, free demo positioning, and sales scripts.",
                    styles["subtitle"],
                )
            )
            story.append(AccentRule())
            story.append(Spacer(1, 18))
        elif line.startswith("## "):
            story.append(Paragraph(md_inline(line[3:]), styles["h2"]))
        elif line.startswith("### "):
            story.append(Paragraph(md_inline(line[4:]), styles["h3"]))
        elif line.startswith("> "):
            story.append(Paragraph(md_inline(line[2:]), styles["quote"]))
        else:
            story.append(Paragraph(md_inline(line), styles["body"]))

    flush_pending()
    return story


def draw_page(canvas, doc) -> None:
    canvas.saveState()
    width, height = A4

    canvas.setFillColor(NAVY)
    canvas.rect(0, height - 0.28 * inch, width, 0.28 * inch, stroke=0, fill=1)
    canvas.setFillColor(TEAL)
    canvas.rect(0, height - 0.28 * inch, 1.65 * inch, 0.28 * inch, stroke=0, fill=1)

    canvas.setFont("Helvetica-Bold", 8)
    canvas.setFillColor(colors.white)
    canvas.drawString(doc.leftMargin, height - 0.19 * inch, "Sierra Tech Spaces")

    canvas.setFont("Helvetica", 7.5)
    canvas.setFillColor(MUTED)
    canvas.drawString(doc.leftMargin, 0.43 * inch, "AI that works as hard as you do.")
    canvas.drawRightString(width - doc.rightMargin, 0.43 * inch, f"Page {doc.page}")
    canvas.restoreState()


def main() -> None:
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    markdown = SOURCE.read_text(encoding="utf-8")
    doc = SimpleDocTemplate(
        str(OUTPUT),
        pagesize=A4,
        rightMargin=0.7 * inch,
        leftMargin=0.7 * inch,
        topMargin=0.65 * inch,
        bottomMargin=0.72 * inch,
        title="Sierra Tech Spaces Customer Offer and Sales Script",
        author="Sierra Tech Spaces",
        subject="Customer offer, free demo script, and sales positioning",
    )
    doc.build(build_story(markdown), onFirstPage=draw_page, onLaterPages=draw_page)
    print(OUTPUT)


if __name__ == "__main__":
    main()

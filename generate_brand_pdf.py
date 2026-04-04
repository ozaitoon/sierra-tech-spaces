"""
Sierra Tech Spaces — Brand Guidelines PDF Generator
Generates a full-color branded PDF with color swatches, typography specimens, etc.
"""

from reportlab.lib.pagesizes import A4
from reportlab.lib.colors import HexColor, Color, white, black
from reportlab.lib.units import mm, cm
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
    PageBreak, HRFlowable
)
from reportlab.lib.enums import TA_LEFT, TA_CENTER
from reportlab.pdfgen import canvas as pdfcanvas
import os

# ── Brand Colors ──
BG = HexColor("#0a0908")
GOLD = HexColor("#D4A006")
GOLD_LIGHT = HexColor("#FACC15")
GOLD_DARK = HexColor("#B88B05")
COPPER = HexColor("#C2703E")
DESTRUCTIVE = HexColor("#E8734A")
FOREGROUND = HexColor("#faf8f5")
WARM_300 = HexColor("#c4b9a8")
WARM_400 = HexColor("#9a9590")
WARM_500 = HexColor("#6b6560")
CARD_BG = HexColor("#141210")
WARM_800 = HexColor("#1c1a17")

W, H = A4

output_path = os.path.join(os.path.dirname(__file__), "STS_Brand_Guidelines.pdf")


def draw_bg(c, doc):
    """Draw dark background on every page."""
    c.saveState()
    c.setFillColor(BG)
    c.rect(0, 0, W, H, fill=1, stroke=0)
    # Gold line at top
    c.setStrokeColor(GOLD)
    c.setLineWidth(1.5)
    c.line(20*mm, H - 12*mm, W - 20*mm, H - 12*mm)
    # Page footer
    c.setFillColor(WARM_500)
    c.setFont("Helvetica", 7)
    c.drawString(20*mm, 10*mm, "Sierra Tech Spaces — Brand Guidelines v1.0 — April 2026 — Confidential")
    c.drawRightString(W - 20*mm, 10*mm, f"Page {doc.page}")
    c.restoreState()


def color_swatch_table(colors, col_width=35*mm):
    """Create a table of color swatches."""
    rows = []
    for name, hex_val, usage in colors:
        color = HexColor(hex_val)
        rows.append([name, hex_val, usage])

    data = [["Name", "Hex", "Usage"]] + rows
    t = Table(data, colWidths=[40*mm, 30*mm, 90*mm])

    style_cmds = [
        ("BACKGROUND", (0, 0), (-1, 0), WARM_800),
        ("TEXTCOLOR", (0, 0), (-1, 0), GOLD),
        ("TEXTCOLOR", (0, 1), (-1, -1), WARM_300),
        ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
        ("FONTNAME", (0, 1), (-1, -1), "Helvetica"),
        ("FONTSIZE", (0, 0), (-1, -1), 8),
        ("ALIGN", (0, 0), (-1, 0), "LEFT"),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("TOPPADDING", (0, 0), (-1, -1), 6),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
        ("LEFTPADDING", (0, 0), (-1, -1), 8),
        ("GRID", (0, 0), (-1, -1), 0.5, HexColor("#3d3a37")),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [CARD_BG, BG]),
    ]

    # Add color swatch to first column
    for i, (name, hex_val, usage) in enumerate(colors):
        style_cmds.append(("BACKGROUND", (0, i+1), (0, i+1), HexColor(hex_val)))
        # Make text readable on light swatches
        lum = int(hex_val[1:3], 16) * 0.299 + int(hex_val[3:5], 16) * 0.587 + int(hex_val[5:7], 16) * 0.114
        text_color = BG if lum > 140 else FOREGROUND
        style_cmds.append(("TEXTCOLOR", (0, i+1), (0, i+1), text_color))

    t.setStyle(TableStyle(style_cmds))
    return t


def build_pdf():
    doc = SimpleDocTemplate(
        output_path,
        pagesize=A4,
        leftMargin=20*mm,
        rightMargin=20*mm,
        topMargin=20*mm,
        bottomMargin=18*mm,
    )

    # ── Styles ──
    styles = getSampleStyleSheet()

    s_cover_title = ParagraphStyle(
        "CoverTitle", parent=styles["Title"],
        fontName="Helvetica-Bold", fontSize=36, leading=40,
        textColor=GOLD, alignment=TA_CENTER, spaceAfter=10,
    )
    s_cover_sub = ParagraphStyle(
        "CoverSub", parent=styles["Normal"],
        fontName="Helvetica", fontSize=14, leading=20,
        textColor=WARM_400, alignment=TA_CENTER, spaceAfter=6,
    )
    s_h1 = ParagraphStyle(
        "H1", parent=styles["Heading1"],
        fontName="Helvetica-Bold", fontSize=22, leading=26,
        textColor=GOLD, spaceBefore=20, spaceAfter=12,
    )
    s_h2 = ParagraphStyle(
        "H2", parent=styles["Heading2"],
        fontName="Helvetica-Bold", fontSize=14, leading=18,
        textColor=FOREGROUND, spaceBefore=16, spaceAfter=8,
    )
    s_h3 = ParagraphStyle(
        "H3", parent=styles["Heading3"],
        fontName="Helvetica-Bold", fontSize=11, leading=14,
        textColor=GOLD_LIGHT, spaceBefore=12, spaceAfter=6,
    )
    s_body = ParagraphStyle(
        "Body", parent=styles["Normal"],
        fontName="Helvetica", fontSize=9, leading=15,
        textColor=WARM_300, spaceAfter=8,
    )
    s_quote = ParagraphStyle(
        "Quote", parent=styles["Normal"],
        fontName="Helvetica-Oblique", fontSize=10, leading=16,
        textColor=WARM_400, leftIndent=15, spaceAfter=10,
        borderColor=GOLD, borderWidth=0, borderPadding=5,
    )
    s_small = ParagraphStyle(
        "Small", parent=styles["Normal"],
        fontName="Helvetica", fontSize=8, leading=12,
        textColor=WARM_500, spaceAfter=4,
    )
    s_overline = ParagraphStyle(
        "Overline", parent=styles["Normal"],
        fontName="Helvetica-Bold", fontSize=8, leading=12,
        textColor=GOLD, spaceAfter=4,
    )

    def hr():
        return HRFlowable(width="100%", thickness=0.5, color=HexColor("#3d3a37"), spaceAfter=10, spaceBefore=10)

    story = []

    # ═══════════════════════════════════════
    # COVER PAGE
    # ═══════════════════════════════════════
    story.append(Spacer(1, 80*mm))
    story.append(Paragraph("SIERRA TECH SPACES", s_cover_title))
    story.append(Paragraph("Brand Guidelines", ParagraphStyle(
        "CoverTitle2", parent=s_cover_title, fontSize=20, leading=24, textColor=FOREGROUND,
    )))
    story.append(Spacer(1, 15*mm))
    story.append(Paragraph("Version 1.0 — April 2026", s_cover_sub))
    story.append(Paragraph("Omar / Nabih / Youssef", s_cover_sub))
    story.append(Paragraph("Cairo, Egypt", s_cover_sub))
    story.append(Spacer(1, 20*mm))
    story.append(Paragraph("Confidential — Internal & Partner Use Only", ParagraphStyle(
        "Conf", parent=s_small, alignment=TA_CENTER, textColor=WARM_500,
    )))
    story.append(PageBreak())

    # ═══════════════════════════════════════
    # TABLE OF CONTENTS
    # ═══════════════════════════════════════
    story.append(Paragraph("TABLE OF CONTENTS", s_h1))
    story.append(hr())
    toc_items = [
        "01  Brand Overview",
        "02  Core Values",
        "03  Logo",
        "04  Color Palette",
        "05  Typography",
        "06  Visual Style",
        "07  Animation & Motion",
        "08  Tone of Voice",
        "09  Taglines",
        "10  Services",
        "11  Team",
        "12  Key Differentiators",
        "13  Do's and Don'ts",
    ]
    for item in toc_items:
        story.append(Paragraph(item, ParagraphStyle(
            "TOC", parent=s_body, fontSize=11, leading=22, textColor=FOREGROUND,
        )))
    story.append(PageBreak())

    # ═══════════════════════════════════════
    # 01 BRAND OVERVIEW
    # ═══════════════════════════════════════
    story.append(Paragraph("01 — BRAND OVERVIEW", s_h1))
    story.append(hr())

    story.append(Paragraph("Name", s_h3))
    story.append(Paragraph("Full: <b>Sierra Tech Spaces</b> &nbsp;&nbsp;|&nbsp;&nbsp; Short: <b>STS</b> / <b>Sierra Tech</b>", s_body))

    story.append(Paragraph("Contact", s_h3))
    story.append(Paragraph("Email: hello@sierratechspaces.com &nbsp;&nbsp;|&nbsp;&nbsp; Web: sierratechspaces.com", s_body))

    story.append(Paragraph("Mission", s_h3))
    story.append(Paragraph(
        '"We help Egyptian businesses work smarter by replacing their most tedious, '
        'time-consuming processes with AI — so they can focus on what actually grows their business."',
        s_quote
    ))

    story.append(Paragraph("Vision", s_h3))
    story.append(Paragraph(
        "Become Egypt's most trusted AI partner for small and medium businesses — known for "
        "solutions that deliver measurable ROI within 30 days.",
        s_body
    ))

    story.append(Paragraph("Positioning Statement", s_h3))
    story.append(Paragraph(
        '"For Egyptian business owners drowning in repetitive work, Sierra Tech Spaces builds '
        'AI-powered automations that save real hours and capture real revenue — delivered in days, '
        'not months, at prices that make sense for the Egyptian market."',
        s_quote
    ))
    story.append(PageBreak())

    # ═══════════════════════════════════════
    # 02 CORE VALUES
    # ═══════════════════════════════════════
    story.append(Paragraph("02 — CORE VALUES", s_h1))
    story.append(hr())

    values = [
        ("Results over hype", "We sell hours saved, leads captured, revenue recovered. Every engagement has a measurable outcome."),
        ("Show, don't tell", "Prototype first. Every potential client sees a working demo before they pay anything."),
        ("Win-win or no deal", "If we can't clearly help, we say so. Our reputation is worth more than a single contract."),
        ("Speak their language", "Arabic-first (Masri dialect), business outcomes not tech jargon."),
    ]
    for title, desc in values:
        story.append(Paragraph(f"<b>{title}</b>", ParagraphStyle(
            "ValTitle", parent=s_body, fontSize=11, textColor=FOREGROUND, spaceAfter=2,
        )))
        story.append(Paragraph(desc, s_body))
        story.append(Spacer(1, 4*mm))

    story.append(PageBreak())

    # ═══════════════════════════════════════
    # 03 LOGO
    # ═══════════════════════════════════════
    story.append(Paragraph("03 — LOGO", s_h1))
    story.append(hr())

    story.append(Paragraph(
        "The STS logo features a stylised mountain silhouette above bold 'STS' letterforms "
        "with 'SIERRA TECH SPACES' below. The current implementation uses a warm gold colorway "
        "on transparent background.",
        s_body
    ))

    story.append(Paragraph("Logo Files", s_h3))
    story.append(Paragraph("<b>logo-gold.png</b> — Gold on transparent (primary, for dark backgrounds)", s_body))
    story.append(Paragraph("<b>logo.jpeg</b> — Original white/purple on black", s_body))

    story.append(Paragraph("Logo Usage Rules", s_h3))
    rules = [
        "Minimum clear space: 1x the height of the 'S' on all sides",
        "Never stretch, rotate, or distort the logo",
        "On dark backgrounds: use the gold variant",
        "Never place on busy or low-contrast backgrounds without a container",
        "The gold outlined container (rounded rectangle, 1.5px gold border with glow) is the preferred website treatment",
    ]
    for rule in rules:
        story.append(Paragraph(f"•  {rule}", s_body))

    story.append(Paragraph("Logo Container Spec", s_h3))
    story.append(Paragraph("Border: 1.5px solid rgba(212, 160, 6, 0.6)", s_small))
    story.append(Paragraph("Shadow: 0 0 15px rgba(212,160,6,0.25), 0 0 40px rgba(212,160,6,0.1)", s_small))
    story.append(Paragraph("Radius: 16px", s_small))

    story.append(PageBreak())

    # ═══════════════════════════════════════
    # 04 COLOR PALETTE
    # ═══════════════════════════════════════
    story.append(Paragraph("04 — COLOR PALETTE", s_h1))
    story.append(hr())

    story.append(Paragraph("Primary Colors", s_h2))
    story.append(color_swatch_table([
        ("Background", "#0a0908", "Page background, primary dark surface"),
        ("Gold", "#D4A006", "Primary accent, CTAs, links, highlights"),
        ("Gold Light", "#FACC15", "Gradient endpoints, hover states"),
        ("Gold Dark", "#B88B05", "Pressed states, darker accent"),
        ("Foreground", "#faf8f5", "Primary text on dark backgrounds"),
    ]))
    story.append(Spacer(1, 8*mm))

    story.append(Paragraph("Secondary Colors", s_h2))
    story.append(color_swatch_table([
        ("Copper", "#C2703E", "Secondary warm accent, tags, team avatars"),
        ("Card Surface", "#141210", "Card backgrounds (when not glass)"),
        ("Destructive", "#E8734A", "Error states, stat card highlights"),
    ]))
    story.append(Spacer(1, 8*mm))

    story.append(Paragraph("Warm Neutral Scale", s_h2))
    story.append(color_swatch_table([
        ("Warm 50", "#faf8f5", "Primary text"),
        ("Warm 100", "#f0ece5", "Bright text"),
        ("Warm 200", "#dfd8cb", "Emphasis text"),
        ("Warm 300", "#c4b9a8", "Default body text"),
        ("Warm 400", "#9a9590", "Muted text"),
        ("Warm 500", "#6b6560", "Subdued text, scrollbar"),
        ("Warm 700", "#3d3a37", "Subtle borders"),
        ("Warm 800", "#1c1a17", "Elevated surfaces"),
        ("Warm 900", "#0a0908", "Background"),
    ]))

    story.append(PageBreak())

    story.append(Paragraph("Gold Scale", s_h2))
    story.append(color_swatch_table([
        ("Gold 50", "#FFFBEB", "Lightest gold tint"),
        ("Gold 100", "#FEF3C7", "Very light gold"),
        ("Gold 200", "#FDE68A", "Light gold"),
        ("Gold 300", "#FCD34D", "Medium light gold"),
        ("Gold 400", "#FBBF24", "Medium gold"),
        ("Gold 500", "#D4A006", "Primary gold (DEFAULT)"),
        ("Gold 600", "#B88B05", "Dark gold"),
        ("Gold 700", "#92710A", "Darker gold"),
        ("Gold 800", "#78600D", "Very dark gold"),
        ("Gold 900", "#634F12", "Deepest gold"),
    ]))
    story.append(Spacer(1, 8*mm))

    story.append(Paragraph("Overlays & Glows", s_h2))
    overlay_data = [
        ["Token", "Value", "Usage"],
        ["Border default", "rgba(255,255,255, 0.08)", "Card borders, dividers"],
        ["Border hover", "rgba(255,255,255, 0.12)", "Hover state borders"],
        ["Glass fill", "rgba(255,255,255, 0.02)", "Glass card backgrounds"],
        ["Gold glow", "rgba(212,160,6, 0.06)", "Ambient glow orbs"],
        ["Copper glow", "rgba(194,112,62, 0.10)", "Secondary glow orbs"],
        ["Gradient text", "linear-gradient(135deg, #D4A006, #FACC15)", "Accent text"],
    ]
    t = Table(overlay_data, colWidths=[35*mm, 55*mm, 70*mm])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), WARM_800),
        ("TEXTCOLOR", (0, 0), (-1, 0), GOLD),
        ("TEXTCOLOR", (0, 1), (-1, -1), WARM_300),
        ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
        ("FONTNAME", (0, 1), (-1, -1), "Helvetica"),
        ("FONTSIZE", (0, 0), (-1, -1), 8),
        ("TOPPADDING", (0, 0), (-1, -1), 5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
        ("LEFTPADDING", (0, 0), (-1, -1), 8),
        ("GRID", (0, 0), (-1, -1), 0.5, HexColor("#3d3a37")),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [CARD_BG, BG]),
    ]))
    story.append(t)

    story.append(PageBreak())

    # ═══════════════════════════════════════
    # 05 TYPOGRAPHY
    # ═══════════════════════════════════════
    story.append(Paragraph("05 — TYPOGRAPHY", s_h1))
    story.append(hr())

    story.append(Paragraph("Display Font — Space Grotesk", s_h2))
    story.append(Paragraph("Weight: 700 (Bold) &nbsp;|&nbsp; Tracking: -0.04em &nbsp;|&nbsp; Line height: 0.95 &nbsp;|&nbsp; Source: Google Fonts", s_body))
    story.append(Paragraph("Used for all headings, titles, hero text, card titles, navigation brand name.", s_body))

    story.append(Paragraph("Body Font — Inter", s_h2))
    story.append(Paragraph("Weights: 300 (Light, default), 400, 500, 600 &nbsp;|&nbsp; Line height: 1.8 &nbsp;|&nbsp; Source: Google Fonts", s_body))
    story.append(Paragraph("Used for all body text, descriptions, paragraphs, UI labels.", s_body))

    story.append(Paragraph("Arabic Font — Cairo (planned)", s_h2))
    story.append(Paragraph("For Arabic translations and bilingual content. Source: Google Fonts.", s_body))

    story.append(Spacer(1, 6*mm))
    story.append(Paragraph("Type Scale", s_h2))

    type_data = [
        ["Element", "Font", "Size", "Weight", "Tracking", "Line Ht"],
        ["Hero title", "Space Grotesk", "80px", "700", "-0.04em", "0.95"],
        ["Section heading", "Space Grotesk", "40px", "700", "-0.04em", "0.95"],
        ["Card title", "Space Grotesk", "22px", "600-700", "-0.04em", "0.95"],
        ["Overline / label", "Inter", "12px", "600", "0.25em", "1.5"],
        ["Body text", "Inter", "15px", "300", "0", "1.8"],
        ["Small text", "Inter", "13px", "300-400", "0", "1.8"],
        ["Tiny / caption", "Inter", "11px", "400-600", "0.08em", "1.5"],
    ]
    t = Table(type_data, colWidths=[30*mm, 28*mm, 18*mm, 18*mm, 22*mm, 18*mm])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), WARM_800),
        ("TEXTCOLOR", (0, 0), (-1, 0), GOLD),
        ("TEXTCOLOR", (0, 1), (-1, -1), WARM_300),
        ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
        ("FONTNAME", (0, 1), (-1, -1), "Helvetica"),
        ("FONTSIZE", (0, 0), (-1, -1), 8),
        ("TOPPADDING", (0, 0), (-1, -1), 5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
        ("LEFTPADDING", (0, 0), (-1, -1), 6),
        ("GRID", (0, 0), (-1, -1), 0.5, HexColor("#3d3a37")),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [CARD_BG, BG]),
    ]))
    story.append(t)

    story.append(PageBreak())

    # ═══════════════════════════════════════
    # 06 VISUAL STYLE
    # ═══════════════════════════════════════
    story.append(Paragraph("06 — VISUAL STYLE", s_h1))
    story.append(hr())

    story.append(Paragraph("Theme", s_h3))
    story.append(Paragraph(
        "Dark, premium, warm-toned luxury aesthetic. Inspired by Linear.app and Modal.com — "
        "minimal, refined, with depth created through translucency and light.",
        s_body
    ))

    story.append(Paragraph("Glass Morphism (Cards)", s_h2))
    story.append(Paragraph("Background: rgba(255, 255, 255, 0.02)", s_small))
    story.append(Paragraph("Backdrop-filter: blur(24px)", s_small))
    story.append(Paragraph("Border: 1px solid rgba(255, 255, 255, 0.05)", s_small))
    story.append(Paragraph("Shadow: inset 0 0 0 1px rgba(255,255,255,0.02), 0 4px 30px rgba(0,0,0,0.2)", s_small))
    story.append(Paragraph("Hover: bg 0.04, border 0.10", s_small))

    story.append(Paragraph("Buttons", s_h2))
    story.append(Paragraph(
        "<b>Primary (Gold):</b> Semi-transparent gold fill, backdrop blur, triple-layer glow shadow, inset highlight. "
        "<b>Secondary:</b> Transparent with white border, backdrop blur, inset highlight. "
        "All buttons are pill-shaped and scale to 0.97 on press.",
        s_body
    ))

    story.append(Paragraph("Noise Texture", s_h2))
    story.append(Paragraph(
        "Fixed SVG fractal noise overlay at 40% opacity with mix-blend-mode: overlay. "
        "Adds analog warmth and photographic grain.",
        s_body
    ))

    story.append(Paragraph("Ambient Glow Orbs", s_h2))
    story.append(Paragraph(
        "Large radial gradients (gold, copper, amber) positioned across the page via body::before. "
        "Creates depth and atmosphere without competing with content.",
        s_body
    ))

    story.append(Paragraph("Three.js Backgrounds", s_h2))
    story.append(Paragraph("• Wireframe terrain — undulating gold mesh mountains", s_body))
    story.append(Paragraph("• Dashed lines — rotating gold/copper line network", s_body))
    story.append(Paragraph("• Spotlights — three moving spotlights on a dark sphere", s_body))
    story.append(Paragraph("Each blended with gradient fades on top/bottom edges.", s_body))

    story.append(Paragraph("Border Radii", s_h3))
    story.append(Paragraph("sm: 6px &nbsp;|&nbsp; md: 10px &nbsp;|&nbsp; lg: 14px &nbsp;|&nbsp; xl: 20px &nbsp;|&nbsp; pill: 9999px", s_body))

    story.append(PageBreak())

    # ═══════════════════════════════════════
    # 07 ANIMATION & MOTION
    # ═══════════════════════════════════════
    story.append(Paragraph("07 — ANIMATION & MOTION", s_h1))
    story.append(hr())

    story.append(Paragraph("GSAP (Scroll-triggered)", s_h2))
    story.append(Paragraph("• Section headers: fade-up, 0.8s, power3.out", s_body))
    story.append(Paragraph("• Card grids: staggered at 0.1–0.15s intervals", s_body))
    story.append(Paragraph("• Service cards: directional slide-in (left, up, right)", s_body))
    story.append(Paragraph("• Hero: sequenced timeline cascade", s_body))

    story.append(Paragraph("Framer Motion (Micro-interactions)", s_h2))
    story.append(Paragraph("• Button hover: scale 1.04 + lift -2px (spring: stiffness 400, damping 17)", s_body))
    story.append(Paragraph("• Button press: scale 0.97", s_body))
    story.append(Paragraph("• Card hover: lift -6px (spring: stiffness 300, damping 20)", s_body))
    story.append(Paragraph("• Status dots: pulsing ring + breathing dot", s_body))
    story.append(Paragraph("• Nav links: gold underline draws from left on hover", s_body))

    story.append(Paragraph("Easing Curves", s_h3))
    story.append(Paragraph("Primary: cubic-bezier(0.23, 1, 0.32, 1) — ease-out-quint", s_body))
    story.append(Paragraph("Transitions: cubic-bezier(0.25, 0.46, 0.45, 0.94) — ease-out-quad", s_body))

    story.append(PageBreak())

    # ═══════════════════════════════════════
    # 08 TONE OF VOICE
    # ═══════════════════════════════════════
    story.append(Paragraph("08 — TONE OF VOICE", s_h1))
    story.append(hr())

    story.append(Paragraph("Personality", s_h2))
    story.append(Paragraph(
        'Professional but not corporate — think "smart friend who happens to be an expert."',
        s_quote
    ))

    story.append(Paragraph("Guidelines", s_h3))
    guidelines = [
        "Confident without being salesy",
        "Arabic-friendly: communications flow in English and Egyptian Arabic (Masri)",
        "Lead with the client's problem, not your technology",
        'Never lead with "AI" — lead with outcomes ("save 4 hours/day")',
        "Show, don't pitch — demo over deck, always",
        "Explain complex concepts simply — assume zero technical background",
        "Be concise. Less is more.",
    ]
    for g in guidelines:
        story.append(Paragraph(f"•  {g}", s_body))

    story.append(Spacer(1, 6*mm))
    story.append(Paragraph("Words We Use", s_h3))
    story.append(Paragraph("Automate, streamline, save, capture, recover, deliver, build, optimize, prototype, demo, results, ROI", s_body))

    story.append(Paragraph("Words We Avoid", s_h3))
    story.append(Paragraph('"Disrupt", "synergy", "leverage", "paradigm", "cheap" (use "fair" or "competitive"), overly technical AI jargon in client-facing content', s_body))

    story.append(PageBreak())

    # ═══════════════════════════════════════
    # 09 TAGLINES
    # ═══════════════════════════════════════
    story.append(Paragraph("09 — TAGLINES", s_h1))
    story.append(hr())

    taglines = [
        ("We automate what slows you down.", "Primary hero / headline"),
        ("AI that works as hard as you do.", "Secondary / social media"),
        ("Smarter operations. Real results.", "Subtitle / email signature"),
        ("Your business, automated.", "Minimal / social bios"),
    ]
    for tagline, use in taglines:
        story.append(Paragraph(f'<b>"{tagline}"</b>', ParagraphStyle(
            "Tag", parent=s_body, fontSize=13, textColor=FOREGROUND, spaceAfter=2,
        )))
        story.append(Paragraph(use, s_small))
        story.append(Spacer(1, 4*mm))

    story.append(PageBreak())

    # ═══════════════════════════════════════
    # 10 SERVICES
    # ═══════════════════════════════════════
    story.append(Paragraph("10 — SERVICES", s_h1))
    story.append(hr())

    story.append(Paragraph("Tier 1 — Quick Wins", s_h2))
    story.append(Paragraph("Fast entry points that demonstrate value.", s_body))
    services_1 = [
        ["Service", "Delivery"],
        ["WhatsApp AI Assistant (Arabic)", "7–10 days"],
        ["Business Website", "5–7 days"],
        ["Social Media Content Engine", "3–5 days"],
        ["Process Audit + Quick Fix", "3–5 days"],
    ]
    t = Table(services_1, colWidths=[90*mm, 70*mm])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), WARM_800),
        ("TEXTCOLOR", (0, 0), (-1, 0), GOLD),
        ("TEXTCOLOR", (0, 1), (-1, -1), WARM_300),
        ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
        ("FONTSIZE", (0, 0), (-1, -1), 9),
        ("TOPPADDING", (0, 0), (-1, -1), 5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
        ("LEFTPADDING", (0, 0), (-1, -1), 8),
        ("GRID", (0, 0), (-1, -1), 0.5, HexColor("#3d3a37")),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [CARD_BG, BG]),
    ]))
    story.append(t)
    story.append(Spacer(1, 6*mm))

    story.append(Paragraph("Tier 2 — Core Solutions", s_h2))
    services_2 = [
        ["Service", "Delivery"],
        ["Lead Generation System", "2–3 weeks"],
        ["Operations Automation", "2–4 weeks"],
        ["AI Customer Service Suite", "2–3 weeks"],
        ["E-commerce Optimization", "2–3 weeks"],
    ]
    t = Table(services_2, colWidths=[90*mm, 70*mm])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), WARM_800),
        ("TEXTCOLOR", (0, 0), (-1, 0), GOLD),
        ("TEXTCOLOR", (0, 1), (-1, -1), WARM_300),
        ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
        ("FONTSIZE", (0, 0), (-1, -1), 9),
        ("TOPPADDING", (0, 0), (-1, -1), 5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
        ("LEFTPADDING", (0, 0), (-1, -1), 8),
        ("GRID", (0, 0), (-1, -1), 0.5, HexColor("#3d3a37")),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [CARD_BG, BG]),
    ]))
    story.append(t)
    story.append(Spacer(1, 6*mm))

    story.append(Paragraph("Tier 3 — Premium", s_h2))
    services_3 = [
        ["Service", "Delivery"],
        ["AI Strategy + Implementation", "Ongoing"],
        ["Custom Software / SaaS", "Custom"],
    ]
    t = Table(services_3, colWidths=[90*mm, 70*mm])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), WARM_800),
        ("TEXTCOLOR", (0, 0), (-1, 0), GOLD),
        ("TEXTCOLOR", (0, 1), (-1, -1), WARM_300),
        ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
        ("FONTSIZE", (0, 0), (-1, -1), 9),
        ("TOPPADDING", (0, 0), (-1, -1), 5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
        ("LEFTPADDING", (0, 0), (-1, -1), 8),
        ("GRID", (0, 0), (-1, -1), 0.5, HexColor("#3d3a37")),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [CARD_BG, BG]),
    ]))
    story.append(t)
    story.append(Spacer(1, 6*mm))

    story.append(Paragraph("Industry Focus (Priority)", s_h3))
    industries = ["E-commerce / D2C Brands", "Real Estate", "Medical Clinics & Healthcare",
                   "Hospitality & F&B", "Professional Services"]
    for i, ind in enumerate(industries):
        story.append(Paragraph(f"{i+1}.  {ind}", s_body))

    story.append(PageBreak())

    # ═══════════════════════════════════════
    # 11 TEAM
    # ═══════════════════════════════════════
    story.append(Paragraph("11 — TEAM", s_h1))
    story.append(hr())

    team_data = [
        ["Name", "Role", "Alias", "Specialty"],
        ["Omar", "AI Engineer", "The Oracle", "Full-stack dev, AI/ML, Claude Code"],
        ["Nabih", "E-commerce & Marketing", "The Strategist", "Digital marketing, e-commerce growth"],
        ["Youssef", "Operations & Audit", "The Analyst", "Process mapping, efficiency, audit"],
    ]
    t = Table(team_data, colWidths=[25*mm, 40*mm, 28*mm, 67*mm])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), WARM_800),
        ("TEXTCOLOR", (0, 0), (-1, 0), GOLD),
        ("TEXTCOLOR", (0, 1), (-1, -1), WARM_300),
        ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
        ("FONTNAME", (0, 1), (0, -1), "Helvetica-Bold"),
        ("TEXTCOLOR", (0, 1), (0, -1), FOREGROUND),
        ("FONTSIZE", (0, 0), (-1, -1), 9),
        ("TOPPADDING", (0, 0), (-1, -1), 6),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
        ("LEFTPADDING", (0, 0), (-1, -1), 8),
        ("GRID", (0, 0), (-1, -1), 0.5, HexColor("#3d3a37")),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [CARD_BG, BG]),
    ]))
    story.append(t)

    story.append(PageBreak())

    # ═══════════════════════════════════════
    # 12 KEY DIFFERENTIATORS
    # ═══════════════════════════════════════
    story.append(Paragraph("12 — KEY DIFFERENTIATORS", s_h1))
    story.append(hr())

    diffs = [
        ("Arabic-first", "Everything built in Egyptian Arabic (Masri dialect)"),
        ("Demo before payment", "Working prototype with real data before spending a pound"),
        ("7–14 day delivery", "Not months, not quarters — two weeks"),
        ("Local pricing", "Cairo-based, world-class quality at local rates"),
        ("Measurable ROI", "Clear metrics on every project"),
        ("Ongoing partnership", "We don't build and disappear"),
    ]
    for title, desc in diffs:
        story.append(Paragraph(f"<b>{title}</b>", ParagraphStyle(
            "DiffT", parent=s_body, fontSize=11, textColor=FOREGROUND, spaceAfter=2,
        )))
        story.append(Paragraph(desc, s_body))
        story.append(Spacer(1, 3*mm))

    story.append(PageBreak())

    # ═══════════════════════════════════════
    # 13 DO'S AND DON'TS
    # ═══════════════════════════════════════
    story.append(Paragraph("13 — DO'S AND DON'TS", s_h1))
    story.append(hr())

    story.append(Paragraph("Do", s_h2))
    dos = [
        "Use dark backgrounds with warm gold accents",
        "Maintain generous whitespace between sections",
        "Use glass morphism for cards and UI elements",
        "Show real screenshots, dashboards, and bot demos",
        "Lead with business outcomes in all copy",
        "Use gradient text for emphasis on key phrases",
    ]
    for d in dos:
        story.append(Paragraph(f"✓  {d}", ParagraphStyle(
            "Do", parent=s_body, textColor=HexColor("#10B981"),
        )))

    story.append(Spacer(1, 6*mm))
    story.append(Paragraph("Don't", s_h2))
    donts = [
        "Use stock AI brain/robot imagery",
        "Use emoji icons in professional materials",
        "Use inline styles in code",
        "Use generic purple-on-white gradients",
        'Write "cheap" — say "fair" or "competitive"',
        "Over-explain technology to clients",
    ]
    for d in donts:
        story.append(Paragraph(f"✗  {d}", ParagraphStyle(
            "Dont", parent=s_body, textColor=DESTRUCTIVE,
        )))

    story.append(Spacer(1, 20*mm))
    story.append(hr())
    story.append(Paragraph(
        "<b>Sierra Tech Spaces</b> — Cairo, Egypt — hello@sierratechspaces.com — sierratechspaces.com",
        ParagraphStyle("Footer", parent=s_body, alignment=TA_CENTER, textColor=WARM_500, fontSize=8),
    ))
    story.append(Paragraph(
        "This document is the single source of truth for all brand decisions. April 2026.",
        ParagraphStyle("Footer2", parent=s_small, alignment=TA_CENTER),
    ))

    # ── Build ──
    doc.build(story, onFirstPage=draw_bg, onLaterPages=draw_bg)
    print(f"PDF generated: {output_path}")


if __name__ == "__main__":
    build_pdf()

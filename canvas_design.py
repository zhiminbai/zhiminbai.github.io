from PIL import Image, ImageDraw, ImageFont
import math, random

random.seed(42)

# === CONFIG ===
W, H = 1080, 1440
FONT_DIR = "/data/user/skills/canvas-design/canvas-fonts"

# === COLOR PALETTE - Guarded Passage ===
INDIGO_DEEP = (22, 26, 60)
INDIGO = (27, 32, 74)
INDIGO_MID = (35, 42, 95)
INDIGO_LIGHT = (48, 56, 120)
IVORY = (245, 240, 232)
IVORY_WARM = (238, 232, 222)
IVORY_DIM = (215, 208, 195)
GOLD = (201, 168, 76)
GOLD_BRIGHT = (225, 198, 110)
GOLD_DIM = (160, 135, 60)
GOLD_PALE = (120, 105, 55)
CHARCOAL = (44, 44, 44)
CHARCOAL_SOFT = (72, 70, 66)
CARD_SHADOW = (12, 14, 30)

# === SETUP ===
img = Image.new('RGB', (W, H), INDIGO_DEEP)
draw = ImageDraw.Draw(img)

# === FONTS ===
f_outfit_reg = ImageFont.truetype(f"{FONT_DIR}/Outfit-Regular.ttf", 40)
f_outfit_bold = ImageFont.truetype(f"{FONT_DIR}/Outfit-Bold.ttf", 62)
f_outfit_sm = ImageFont.truetype(f"{FONT_DIR}/Outfit-Regular.ttf", 26)
f_outfit_xs = ImageFont.truetype(f"{FONT_DIR}/Outfit-Regular.ttf", 20)
f_outfit_tag = ImageFont.truetype(f"{FONT_DIR}/Outfit-Regular.ttf", 22)
f_serif = ImageFont.truetype(f"{FONT_DIR}/InstrumentSerif-Regular.ttf", 110)
f_serif_sm = ImageFont.truetype(f"{FONT_DIR}/InstrumentSerif-Regular.ttf", 30)
f_italiana = ImageFont.truetype(f"{FONT_DIR}/Italiana-Regular.ttf", 34)
f_btn = ImageFont.truetype(f"{FONT_DIR}/WorkSans-Bold.ttf", 26)
f_footer = ImageFont.truetype(f"{FONT_DIR}/Outfit-Regular.ttf", 18)
f_small_bold = ImageFont.truetype(f"{FONT_DIR}/BricolageGrotesque-Bold.ttf", 28)
f_big_num = ImageFont.truetype(f"{FONT_DIR}/InstrumentSerif-Regular.ttf", 48)

# === SHADOW UTILITY ===
def blur_rect(draw, xy, radius, fill_alpha, steps=12):
    x1, y1, x2, y2 = xy
    for i in range(steps, 0, -1):
        a = fill_alpha // (steps - i + 1)
        inset = int(radius * (steps - i) / steps * 0.6)
        r, g, b = fill_alpha[:3] if isinstance(fill_alpha, tuple) else fill_alpha
        fill = (r, g, b)
        draw.rounded_rectangle(
            (x1 + inset, y1 + inset, x2 - inset, y2 - inset),
            radius=max(2, radius - inset), fill=fill)

# === 1. BACKGROUND TEXTURE - subtle grid ===
for row in range(0, H, 40):
    for col in range(0, W, 40):
        if (row // 40 + col // 40) % 3 == 1:
            alpha = 3
            draw.rectangle([col, row, col + 1, row + 1], fill=INDIGO_LIGHT)

# === 2. TOP PORTAL / GATEWAY ===

# Large arch / portal structure at top
portal_top = 0
portal_h = 340
arch_cx = W // 2
arch_w = 520
arch_h = 220

# Graduated background from deep to mid
for y in range(portal_h):
    t = y / portal_h
    r = int(INDIGO_DEEP[0] * (1 - t) + INDIGO_MID[0] * t)
    g = int(INDIGO_DEEP[1] * (1 - t) + INDIGO_MID[1] * t)
    b = int(INDIGO_DEEP[2] * (1 - t) + INDIGO_MID[2] * t)
    draw.line([(0, y), (W, y)], fill=(r, g, b))

# Architectural arch shape (inverted U)
arch_left = arch_cx - arch_w // 2
arch_right = arch_cx + arch_w // 2
arch_top = 25
arch_bottom = arch_top + arch_h

# Draw arch outline
line_w = 3
for x_off in range(line_w):
    draw.arc([arch_left - x_off, arch_top - x_off, arch_right + x_off, arch_bottom + x_off],
             180, 0, fill=GOLD_DIM, width=1)
# Vertical pillars
draw.line([(arch_left, arch_top + arch_h // 2), (arch_left, arch_bottom + 60)], fill=GOLD_DIM, width=2)
draw.line([(arch_right, arch_top + arch_h // 2), (arch_right, arch_bottom + 60)], fill=GOLD_DIM, width=2)

# Inner arch
draw.arc([arch_left + 8, arch_top + 8, arch_right - 8, arch_bottom - 8], 180, 0, fill=GOLD_PALE, width=1)

# Keystone at top center
ks = 14
draw.polygon([
    (arch_cx, arch_top - 4),
    (arch_cx - ks, arch_top + ks - 4),
    (arch_cx + ks, arch_top + ks - 4)
], fill=GOLD)
draw.rectangle([arch_cx - 2, arch_top - 2, arch_cx + 2, arch_top + 2], fill=GOLD_BRIGHT)

# Decorative horizontal bands between pillars
for by in [arch_bottom + 15, arch_bottom + 35]:
    draw.line([(arch_left + 4, by), (arch_right - 4, by)], fill=GOLD_DIM, width=1)

# Small centered diamond
d_sz = 6
d_pts = [
    (arch_cx, arch_bottom + 8),
    (arch_cx + d_sz, arch_bottom + 8 + d_sz),
    (arch_cx, arch_bottom + 8 + d_sz * 2),
    (arch_cx - d_sz, arch_bottom + 8 + d_sz)
]
draw.polygon(d_pts, fill=GOLD)

# Pillar capitals (simple rectangles)
cap_w = 14
cap_h = 8
draw.rectangle([arch_left - 3, arch_top + arch_h // 2 - cap_h, arch_left - 3 + cap_w, arch_top + arch_h // 2], fill=GOLD_DIM)
draw.rectangle([arch_right - cap_w + 3, arch_top + arch_h // 2 - cap_h, arch_right + 3, arch_top + arch_h // 2], fill=GOLD_DIM)

# === 3. SIDE COLUMN PATTERNS (left & right decorative columns) ===
col_y_start = 360
col_y_end = 1020
col_w = 28

# Left column
for y in range(col_y_start, col_y_end, 36):
    draw.rectangle([(30, y), (30 + col_w, y + col_w)], fill=INDIGO_MID)
    if (y // 36) % 2 == 0:
        draw.rectangle([(34, y + 4), (30 + col_w - 4, y + col_w - 4)], fill=GOLD_DIM)
    draw.rectangle([(36, y + 6), (30 + col_w - 6, y + col_w - 6)], fill=INDIGO)

# Right column
for y in range(col_y_start, col_y_end, 36):
    rx = W - 30 - col_w
    draw.rectangle([(rx, y), (rx + col_w, y + col_w)], fill=INDIGO_MID)
    if (y // 36) % 2 == 0:
        draw.rectangle([(rx + 4, y + 4), (rx + col_w - 4, y + col_w - 4)], fill=GOLD_DIM)
    draw.rectangle([(rx + 6, y + 6), (rx + col_w - 6, y + col_w - 6)], fill=INDIGO)

# === 4. TITLE SECTION ===
# Main Chinese title
title_y = 115
draw.text((arch_cx, title_y), "保险服务", fill=IVORY, font=f_serif, anchor="mm")

# English subtitle with gold line treatment
sub_y = 210
line_len = 60
draw.line([(arch_cx - line_len, sub_y), (arch_cx - 12, sub_y)], fill=GOLD_DIM, width=1)
draw.text((arch_cx, sub_y - 2), "INSURANCE SERVICES", fill=GOLD, font=f_italiana, anchor="mm")
draw.line([(arch_cx + 12, sub_y), (arch_cx + line_len, sub_y)], fill=GOLD_DIM, width=1)

# === 5. DECORATIVE HORIZONTAL BAND WITH CHEVRONS ===
band_y = 288
band_h = 48
draw.rectangle([(0, band_y), (W, band_y + band_h)], fill=INDIGO_MID)

# Chevron repeating pattern
for i in range(16):
    cx = 28 + i * 66
    cy = band_y + band_h // 2
    size = 14
    half = size // 2
    third = size // 3
    pts = [(cx - half, cy - third), (cx, cy + third), (cx + half, cy - third)]
    draw.line(pts, fill=GOLD_DIM, width=2)
    if i % 3 == 0:
        draw.ellipse([cx - 3, band_y + 6, cx + 3, band_y + 12], fill=GOLD_BRIGHT)
    if i % 3 == 1:
        draw.ellipse([cx - 3, band_y + band_h - 12, cx + 3, band_y + band_h - 6], fill=GOLD_BRIGHT)

# === 6. TAGLINE ===
tag_y = 380
draw.text((arch_cx, tag_y), "守护每一份承诺", fill=IVORY_DIM, font=f_outfit_sm, anchor="mm")
draw.text((arch_cx, tag_y + 34), "PROTECTING EVERY COMMITMENT", fill=GOLD_DIM, font=f_outfit_xs, anchor="mm")

# Small decorative diamond cluster
diamond_base_y = tag_y + 60
for i, dx in enumerate([-20, 0, 20]):
    dd = 4
    if i == 1:
        dpts = [(arch_cx + dx, diamond_base_y - dd), (arch_cx + dx + dd, diamond_base_y),
                (arch_cx + dx, diamond_base_y + dd), (arch_cx + dx - dd, diamond_base_y)]
        draw.polygon(dpts, fill=GOLD)
    else:
        draw.ellipse([arch_cx + dx - 2, diamond_base_y - 2, arch_cx + dx + 2, diamond_base_y + 2], fill=GOLD_DIM)

# === 7. TWO MAIN ENTRY CARDS ===
card_w = 420
card_h = 420
card_radius = 18
gap = 50
total_cards_w = card_w * 2 + gap
start_x = (W - total_cards_w) // 2
card1_x = start_x
card2_x = start_x + card_w + gap
card_y = 500

def draw_entry_card(draw, cx, cy, cw, ch, icon_type, title_cn, title_en, desc_lines, btn_text, btn_gold=False):
    # Deep shadow
    for i in range(5, 0, -1):
        inset = i * 2
        alpha_factor = 1.0 - (i / 5) * 0.7
        r = int(CARD_SHADOW[0] * alpha_factor)
        gg = int(CARD_SHADOW[1] * alpha_factor)
        b = int(CARD_SHADOW[2] * alpha_factor)
        draw.rounded_rectangle(
            (cx + inset, cy + inset + 4, cx + cw - inset, cy + ch + inset + 4),
            card_radius, fill=(r, gg, b))

    # Main card body
    draw.rounded_rectangle((cx, cy, cx + cw, cy + ch), card_radius, fill=IVORY)

    # Top decorative header band (dark indigo)
    header_h2 = 110
    draw.rounded_rectangle((cx, cy, cx + cw, cy + header_h2), 18, fill=INDIGO_MID)
    # Square the bottom corners
    draw.rectangle([(cx, cy + header_h2 - 18), (cx + cw, cy + header_h2)], fill=INDIGO_MID)

    # Gold accent line at bottom of header
    draw.line([(cx + 20, cy + header_h2 - 1), (cx + cw - 20, cy + header_h2 - 1)], fill=GOLD_DIM, width=1)

    # Small decorative dots in header corners
    for dx, dy in [(18, 18), (cw - 18, 18)]:
        draw.ellipse([cx + dx - 2, cy + dy - 2, cx + dx + 2, cy + dy + 2], fill=GOLD_DIM)
    for dx, dy in [(18, header_h2 - 18), (cw - 18, header_h2 - 18)]:
        draw.ellipse([cx + dx - 2, cy + dy - 2, cx + dx + 2, cy + dy + 2], fill=GOLD_DIM)

    # === ICON ===
    icon_cx = cx + cw // 2
    icon_cy = cy + header_h2 // 2

    if icon_type == "shield":
        # Shield outline
        s = 40
        half_s = s // 2
        third_s = s // 3
        sh_pts = [
            (icon_cx - half_s, icon_cy - third_s),
            (icon_cx + half_s, icon_cy - third_s),
            (icon_cx + half_s, icon_cy + third_s // 2),
            (icon_cx, icon_cy + half_s),
            (icon_cx - half_s, icon_cy + third_s // 2),
        ]
        draw.polygon(sh_pts, outline=GOLD, width=3)
        # Inner shield
        inner_s = 20
        inner_pts = [
            (icon_cx - inner_s // 2, icon_cy - 4),
            (icon_cx + inner_s // 2, icon_cy - 4),
            (icon_cx + inner_s // 2, icon_cy + 4),
            (icon_cx, icon_cy + 12),
            (icon_cx - inner_s // 2, icon_cy + 4),
        ]
        draw.polygon(inner_pts, outline=GOLD_DIM, width=2)
        # Checkmark inside
        chk_s = 6
        draw.line([(icon_cx - chk_s, icon_cy), (icon_cx - 2, icon_cy + 4), (icon_cx + chk_s, icon_cy - 3)],
                  fill=GOLD_BRIGHT, width=2)

    elif icon_type == "document":
        # Document
        doc_w2, doc_h2 = 28, 36
        doc_x = icon_cx - doc_w2 // 2
        doc_y = icon_cy - doc_h2 // 2
        draw.rounded_rectangle([doc_x, doc_y, doc_x + doc_w2, doc_y + doc_h2], 4, outline=GOLD, width=3)
        # Fold
        draw.line([(doc_x + doc_w2 - 8, doc_y), (doc_x + doc_w2 - 8, doc_y + 8), (doc_x + doc_w2, doc_y + 8)],
                  fill=GOLD, width=2)
        # Lines
        for li in range(3):
            ly = doc_y + 14 + li * 6
            lw2 = 8 if li == 1 else 14
            draw.line([(doc_x + 5, ly), (doc_x + 5 + lw2, ly)], fill=GOLD_DIM, width=2)
        # Search glass
        mg_cx = icon_cx + 16
        mg_cy = icon_cy + 16
        r2 = 7
        draw.ellipse([mg_cx - r2, mg_cy - r2, mg_cx + r2, mg_cy + r2], outline=GOLD, width=2)
        draw.line([(mg_cx + r2 - 1, mg_cy + r2 - 1), (mg_cx + r2 + 5, mg_cy + r2 + 5)], fill=GOLD, width=3)

    # === TITLES ===
    title_y2 = cy + header_h2 + 30
    draw.text((cx + cw // 2, title_y2), title_cn, fill=CHARCOAL, font=f_outfit_bold, anchor="mm")
    draw.text((cx + cw // 2, title_y2 + 35), title_en, fill=CHARCOAL_SOFT, font=f_outfit_xs, anchor="mm")

    # === DESCRIPTION ===
    desc_y = title_y2 + 70
    for line in desc_lines:
        draw.text((cx + cw // 2, desc_y), line, fill=CHARCOAL_SOFT, font=f_outfit_sm, anchor="mm")
        desc_y += 32

    # === ACTION BUTTON ===
    btn_h = 42
    btn_w = 240
    btn_x = cx + (cw - btn_w) // 2
    btn_y = cy + ch - 75

    if btn_gold:
        draw.rounded_rectangle((btn_x, btn_y, btn_x + btn_w, btn_y + btn_h), 21, fill=GOLD_DIM)
        draw.text((btn_x + btn_w // 2, btn_y + btn_h // 2), btn_text, fill=INDIGO_DEEP, font=f_btn, anchor="mm")
    else:
        draw.rounded_rectangle((btn_x, btn_y, btn_x + btn_w, btn_y + btn_h), 21, fill=INDIGO_MID)
        draw.text((btn_x + btn_w // 2, btn_y + btn_h // 2), btn_text, fill=GOLD, font=f_btn, anchor="mm")

# Card 1: Purchase Insurance
draw_entry_card(draw, card1_x, card_y, card_w, card_h,
    icon_type="shield",
    title_cn="购买保险",
    title_en="PURCHASE INSURANCE",
    desc_lines=["为您和家人提供全面保障", "健康 · 意外 · 旅行 · 财产"],
    btn_text="立即投保",
    btn_gold=False)

# Card 2: Policy Inquiry
draw_entry_card(draw, card2_x, card_y, card_w, card_h,
    icon_type="document",
    title_cn="保单查询",
    title_en="POLICY INQUIRY",
    desc_lines=["随时随地查询保单信息", "理赔进度 · 保单详情"],
    btn_text="立即查询",
    btn_gold=True)

# === 8. CONNECTOR BETWEEN CARDS ===
conn_y = card_y + card_h + 24
# Horizontal connecting line
draw.line([(card1_x + card_w + 8, conn_y), (card2_x - 8, conn_y)], fill=GOLD_DIM, width=1)
# Center circle
draw.ellipse([W // 2 - 5, conn_y - 5, W // 2 + 5, conn_y + 5], fill=GOLD)
draw.ellipse([W // 2 - 2, conn_y - 2, W // 2 + 2, conn_y + 2], fill=GOLD_BRIGHT)

# === 9. TRUST INDICATORS ===
trust_y = 995
draw.line([(80, trust_y), (W - 80, trust_y)], fill=INDIGO_MID, width=1)

trust_items = ["信息安全保障", "专业客服支持", "7×24小时服务"]
trust_gap = 290
trust_start = (W - (trust_gap * 3)) // 2 - 30
for i, item in enumerate(trust_items):
    tx = trust_start + 60 + i * trust_gap
    # Small gold diamond
    dsz = 5
    di_pts = [(tx, trust_y + 18 - dsz), (tx + dsz, trust_y + 18),
              (tx, trust_y + 18 + dsz), (tx - dsz, trust_y + 18)]
    draw.polygon(di_pts, fill=GOLD_DIM)
    draw.text((tx + 14, trust_y + 18), item, fill=IVORY_DIM, font=f_outfit_xs, anchor="lm")

# === 10. BOTTOM GEOMETRIC PATTERN ===
pat_y = 1080
pat_h = 220
# Background panel
draw.rectangle([(0, pat_y), (W, pat_y + pat_h)], fill=INDIGO_MID)

# Complex geometric pattern - layered diamonds and lines
for row in range(5):
    for col in range(22):
        px = 24 + col * 48
        py = pat_y + 20 + row * 40
        if (row + col) % 3 == 0:
            dsz = 6
            dpts = [(px, py - dsz), (px + dsz, py), (px, py + dsz), (px - dsz, py)]
            draw.polygon(dpts, fill=GOLD_DIM)
        elif (row + col) % 3 == 1:
            draw.ellipse([px - 3, py - 3, px + 3, py + 3], fill=GOLD_PALE)
        else:
            draw.rectangle([px - 2, py - 2, px + 2, py + 2], fill=INDIGO_LIGHT)

# === 11. FOOTER ===
footer_y = 1360
draw.line([(60, footer_y), (W - 60, footer_y)], fill=GOLD_DIM, width=1)
draw.text((W // 2, footer_y + 25), "© 2026 · 保险服务 · 值得信赖", fill=IVORY_DIM, font=f_footer, anchor="mm")

# Small shield mark in footer
sh_x, sh_y = W - 80, footer_y + 25
s_sz = 14
sh_pts = [
    (sh_x - s_sz, sh_y - s_sz // 2),
    (sh_x + s_sz, sh_y - s_sz // 2),
    (sh_x + s_sz, sh_y + s_sz // 4),
    (sh_x, sh_y + s_sz),
    (sh_x - s_sz, sh_y + s_sz // 4),
]
draw.polygon(sh_pts, outline=GOLD_DIM, width=2)

# === 12. OUTER FRAME ===
frame_margin = 22
draw.rectangle([(frame_margin, frame_margin), (W - frame_margin, H - frame_margin)],
               outline=GOLD_DIM, width=1)
frame_margin2 = 28
draw.rectangle([(frame_margin2, frame_margin2), (W - frame_margin2, H - frame_margin2)],
               outline=(*GOLD_PALE, 40), width=1)

# === 13. CORNER ACCENTS ===
corner_size = 35
for cx2, cy2 in [(frame_margin, frame_margin), (W - frame_margin, frame_margin),
                  (frame_margin, H - frame_margin), (W - frame_margin, H - frame_margin)]:
    # L-shape corner markers
    if cx2 == frame_margin and cy2 == frame_margin:
        draw.line([(cx2, cy2 + corner_size), (cx2, cy2), (cx2 + corner_size, cy2)], fill=GOLD_PALE, width=1)
    elif cx2 == W - frame_margin and cy2 == frame_margin:
        draw.line([(cx2, cy2 + corner_size), (cx2, cy2), (cx2 - corner_size, cy2)], fill=GOLD_PALE, width=1)
    elif cx2 == frame_margin and cy2 == H - frame_margin:
        draw.line([(cx2, cy2 - corner_size), (cx2, cy2), (cx2 + corner_size, cy2)], fill=GOLD_PALE, width=1)
    else:
        draw.line([(cx2, cy2 - corner_size), (cx2, cy2), (cx2 - corner_size, cy2)], fill=GOLD_PALE, width=1)

# === SAVE ===
img.save("/workspace/insurance-transit-page.png", "PNG")
print("Masterpiece saved to /workspace/insurance-transit-page.png")
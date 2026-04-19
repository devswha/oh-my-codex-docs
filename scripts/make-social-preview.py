#!/usr/bin/env python3
"""Compose /images/omx-social-preview.jpg matching the OMC cc.png layout.

Left side: "Codex-On-Steroids" red title, "oh-my-codex" tagline,
"Multi-agent orchestration / for OpenAI Codex CLI" description.
Right side: OMX mascot (transparent PNG) on a dark background.
"""

from PIL import Image, ImageDraw, ImageFont
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "public" / "images" / "omx-social-preview.jpg"
MASCOT = ROOT / "public" / "images" / "omx-character-nobg.png"

W, H = 1200, 630
BG = (18, 18, 18)
RED = (239, 68, 68)
MUTED = (170, 170, 170)
TAG = (136, 136, 136)

TITLE_FONT = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
TAG_FONT = "/usr/share/fonts/truetype/dejavu/DejaVuSansMono.ttf"
BODY_FONT = "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"

canvas = Image.new("RGB", (W, H), BG)

# Mascot: transparent PNG, invert dark pixels to white for contrast on dark bg
mascot = Image.open(MASCOT).convert("RGBA")
mw, mh = mascot.size
# Target height fits within right panel, leaving room around edges
target_h = 420
target_w = int(mw * (target_h / mh))
mascot = mascot.resize((target_w, target_h), Image.LANCZOS)

# Invert luminance where alpha is present so the black outline shows on dark bg
pixels = mascot.load()
for y in range(mascot.height):
    for x in range(mascot.width):
        r, g, b, a = pixels[x, y]
        if a > 0:
            pixels[x, y] = (255 - r, 255 - g, 255 - b, a)

# Place on right half, horizontally centered within x in [620, 1180]
panel_x_start = 680
panel_w = W - panel_x_start - 40
mascot_x = panel_x_start + (panel_w - target_w) // 2
mascot_y = (H - target_h) // 2
canvas.paste(mascot, (mascot_x, mascot_y), mascot)

draw = ImageDraw.Draw(canvas)
title = ImageFont.truetype(TITLE_FONT, 68)
tag = ImageFont.truetype(TAG_FONT, 32)
body = ImageFont.truetype(BODY_FONT, 30)

x = 80
draw.text((x, 180), "Codex-On-Steroids", font=title, fill=RED)
draw.text((x, 280), "oh-my-codex", font=tag, fill=TAG)
draw.text((x, 360), "Multi-agent orchestration", font=body, fill=MUTED)
draw.text((x, 402), "for OpenAI Codex CLI", font=body, fill=MUTED)

canvas.save(OUT, "JPEG", quality=92, optimize=True)
print(f"wrote {OUT} ({OUT.stat().st_size} bytes)")

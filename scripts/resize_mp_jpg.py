"""
Convert two legacy MediaPilot jpgs to 1600x1000 PNG, center-cropped to cover.
"""

from pathlib import Path
from PIL import Image

BASE = Path(r"C:\Users\19802\Desktop\ClaudeCodeTest\PilotLeon\public\images\projects")
OUT = BASE / "gallery"
OUT.mkdir(exist_ok=True)

TARGET_W, TARGET_H = 1600, 1000


def resize_cover(src: Path, dst: Path) -> None:
    img = Image.open(src)
    if img.mode != "RGB":
        img = img.convert("RGB")
    src_w, src_h = img.size
    src_ratio = src_w / src_h
    dst_ratio = TARGET_W / TARGET_H

    if src_ratio > dst_ratio:
        # source wider: scale by height
        scale_h = TARGET_H
        scale_w = round(src_w * TARGET_H / src_h)
    else:
        scale_w = TARGET_W
        scale_h = round(src_h * TARGET_W / src_w)

    resized = img.resize((scale_w, scale_h), Image.LANCZOS)
    crop_x = max(0, (scale_w - TARGET_W) // 2)
    crop_y = max(0, (scale_h - TARGET_H) // 2)
    cropped = resized.crop((crop_x, crop_y, crop_x + TARGET_W, crop_y + TARGET_H))
    cropped.save(dst, "PNG", optimize=True)
    print(f"OK {dst} {dst.stat().st_size} bytes from {src_w}x{src_h}")


pairs = [
    (BASE / "mediapilot-03.jpg", OUT / "mediapilot-05.png"),
    (BASE / "mediapilot-04.jpg", OUT / "mediapilot-06.png"),
]
for src, dst in pairs:
    resize_cover(src, dst)

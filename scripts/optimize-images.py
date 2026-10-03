"""Generate display-sized WebP copies of the Figma PNG exports."""

from pathlib import Path
from PIL import Image

SRC = Path(__file__).resolve().parents[1] / "assets"

# 2x of Figma display size (logo at 3x). Never upscale past the source.
TARGETS = {
    "logo.png": (216, 144),
    "paper.png": (862, 576),
    "diagram.png": (592, 394),
    "finger-a.png": (546, 364),
    "finger-b.png": (592, 394),
    "finger-c.png": (592, 394),
    "finger-d.png": (592, 394),
    "arm.png": (214, 266),
    "hand.png": (158, 196),
    "head.png": (188, 216),
    "puppet.png": (644, 968),
}


def fit_within(im: Image.Image, max_w: int, max_h: int) -> Image.Image:
    w, h = im.size
    if w <= max_w and h <= max_h:
        return im
    scale = min(max_w / w, max_h / h)
    size = (max(1, round(w * scale)), max(1, round(h * scale)))
    return im.resize(size, Image.Resampling.LANCZOS)


def main() -> None:
    total_in = 0
    total_out = 0
    for png in sorted(SRC.glob("*.png")):
        total_in += png.stat().st_size
        original = Image.open(png)
        source_size = original.size
        im = original.convert("RGBA")
        if png.name in TARGETS:
            im = fit_within(im, *TARGETS[png.name])
        out = png.with_suffix(".webp")
        im.save(out, "WEBP", quality=82, method=6)
        total_out += out.stat().st_size
        print(
            f"{png.name:16} {source_size} -> {im.size}  "
            f"{png.stat().st_size / 1024:7.0f}KB -> {out.stat().st_size / 1024:6.0f}KB"
        )
    print(f"\nPNG {total_in / 1024 / 1024:.2f}MB  WEBP {total_out / 1024 / 1024:.2f}MB")


if __name__ == "__main__":
    main()

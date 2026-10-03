"""Remove solid black backgrounds from project section PNGs."""

from pathlib import Path

from PIL import Image

ASSETS = Path(__file__).resolve().parents[1] / "assets"
FILES = [
    "project-task-redistribution.png",
    "project-security-foundations.png",
    "project-second-thought.png",
]


def key_out_black(im: Image.Image, hard: int = 14, soft: int = 28) -> Image.Image:
    im = im.convert("RGBA")
    px = im.load()
    w, h = im.size
    for y in range(h):
        for x in range(w):
            r, g, b, _a = px[x, y]
            m = max(r, g, b)
            chroma = max(r, g, b) - min(r, g, b)
            if m <= hard and chroma <= 12:
                px[x, y] = (r, g, b, 0)
            elif m < soft and chroma <= 18:
                alpha = int(255 * (m - hard) / max(1, soft - hard))
                alpha = max(0, min(255, alpha))
                px[x, y] = (r, g, b, alpha)
    return im


def main() -> None:
    for name in FILES:
        path = ASSETS / name
        keyed = key_out_black(Image.open(path))
        keyed.save(path, optimize=True)
        print(f"updated {name}")


if __name__ == "__main__":
    main()

# Madhulika Itha — homepage

Plain HTML, CSS, and vanilla JavaScript. No UI framework, no build step.

The page is the Figma **MAIN-HOMEPAGE** frame. The arm, strings, and puppet scale together so those connections stay fixed. The nav bar and its spotlight stay locked to each other, on the top edge of the bar. Extra window space changes the gaps between nav labels, within the left text, and between that text and the figure.

Hovering a nav item runs the prototype’s Smart Animate (300ms ease-out) into that frame. The first view is the resting frame, before any hover.

## Setup

From the project root:

```bash
python -m http.server 8080
```

Then open [http://127.0.0.1:8080/](http://127.0.0.1:8080/).

Opening `index.html` from disk also works. A local server is better so fonts and module-adjacent paths load consistently.

Optional: regenerate display-sized WebP files after replacing PNGs in `assets/`:

```bash
python scripts/optimize-images.py
```

Requires [Pillow](https://pypi.org/project/Pillow/). The site still falls back to the original PNGs inside `<picture>`.

## Screen

The artboard relationships stay at 1280×832 inside the figure. Laptop and desktop windows fit that scene to the height, and the flexible gaps take up the rest of the width.

## Accessibility

- Landmarks: skip link, `header`, `main`, `footer`, primary `nav`.
- Decorative collage and puppeteer are `aria-hidden`.
- Visible labels stay uppercase via CSS; the HTML is sentence case so screen readers do not spell letter-by-letter.
- Keyboard: Tab through logo, CTAs, and nav. Arrow keys, Home, and End move between nav items. `:focus-visible` rings use the gold accent.
- `aria-current="page"` tracks the selected nav state.
- Tag color is the Figma bronze `#887150`.
- `prefers-reduced-motion: reduce` disables the pose transitions.

## Performance

- Display-sized WebP (~0.6MB) with PNG fallback (~19MB originals kept for compatibility).
- `rel="preload"` on the logo and puppet WebP; `display=swap` / `optional` on fonts; `defer` on `js/main.js`.
- `decoding="async"` on images; `loading="lazy"` only on off-emphasis background layers; `fetchpriority` on the logo and puppet.
- Backdrop blur matches the Figma veil (5.5px).

## Files

| Path | Role |
| --- | --- |
| `index.html` | Semantic homepage skeleton |
| `css/styles.css` | Frame layout, type, and motion |
| `js/main.js` | Poses, indicator, and frame fit |
| `assets/` | Figma exports + WebP |
| `scripts/optimize-images.py` | Optional WebP rebuild |

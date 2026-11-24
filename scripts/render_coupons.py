"""Convert approved Lumeli SVG coupon designs into real PNG, PDF and ZIP assets.

Use: python -m pip install -r requirements-coupons.txt
     python scripts/render_coupons.py
"""
from pathlib import Path
from zipfile import ZipFile, ZIP_DEFLATED

import cairosvg

ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / "public" / "coupons"
IDS = ("new-website", "redesign", "landing-page", "custom-project")
OUTPUTS = []

for name in (*IDS, *(f'en-{name}' for name in IDS)):
    svg = ASSETS / f"{name}.svg"
    if not svg.is_file():
        raise FileNotFoundError(f"Missing coupon source: {svg}")

    png = ASSETS / f"{name}.png"
    pdf = ASSETS / f"{name}.pdf"
    cairosvg.svg2png(url=str(svg), write_to=str(png), output_width=1200, output_height=630)
    cairosvg.svg2pdf(url=str(svg), write_to=str(pdf))

    if not png.read_bytes().startswith(b"\x89PNG\r\n\x1a\n"):
        raise ValueError(f"Not a valid PNG: {png}")
    if not pdf.read_bytes().startswith(b"%PDF"):
        raise ValueError(f"Not a valid PDF: {pdf}")
    for output in (png, pdf):
        if output.stat().st_size < 1500:
            raise ValueError(f"Coupon export looks too small: {output}")
        OUTPUTS.append(output)

archive = ASSETS / "lumeli-black-friday-2026.zip"
with ZipFile(archive, "w", ZIP_DEFLATED) as z:
    for output in OUTPUTS:
        if not output.name.startswith('en-'):
            z.write(output, arcname=output.name)
if archive.stat().st_size < 8000:
    raise ValueError(f"Coupon archive looks too small: {archive}")

print("Generated:", ", ".join(str(p.relative_to(ROOT)) for p in OUTPUTS))
print("Archive:", archive.relative_to(ROOT))

english_archive = ASSETS / "lumeli-black-friday-2026-en.zip"
with ZipFile(english_archive, "w", ZIP_DEFLATED) as z:
    for output in OUTPUTS:
        if output.name.startswith("en-"):
            z.write(output, arcname=output.name)
if english_archive.stat().st_size < 8000:
    raise ValueError("English coupon archive looks too small")

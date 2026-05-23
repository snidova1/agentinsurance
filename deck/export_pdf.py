"""Export pitch deck to PDF via per-slide screenshot + image merge.

Bypasses reveal.js print-pdf mode (which strips custom padding).
Renders each slide as 1280x720 PNG then merges into single PDF.
"""
import asyncio
from pathlib import Path
from playwright.async_api import async_playwright

DECK = Path("/tmp/agentinsurance/deck/index.html").resolve()
OUT_PDF = Path("/tmp/agentinsurance/AgentInsurance_Pitch.pdf")
TMP_DIR = Path("/tmp/agentinsurance/deck/_tmp_slides")
TMP_DIR.mkdir(exist_ok=True)
NUM_SLIDES = 11

async def main():
    async with async_playwright() as pw:
        browser = await pw.chromium.launch()
        # Larger viewport with no UI controls
        ctx = await browser.new_context(
            viewport={"width": 1280, "height": 720},
            device_scale_factor=2.0,  # retina-quality
        )
        page = await ctx.new_page()

        # Use ?showNotes=false&controls=false&progress=false via fragment trick
        # Hide reveal controls + progress via injected CSS
        for i in range(NUM_SLIDES):
            url = f"file://{DECK}#/{i}"
            await page.goto(url, wait_until="networkidle")
            # Inject CSS to hide reveal UI chrome
            await page.add_style_tag(content="""
                .reveal .controls, .reveal .progress, .reveal .slide-number { display: none !important; }
                .reveal .backgrounds { background: transparent !important; }
                html, body { overflow: hidden !important; }
            """)
            await page.wait_for_timeout(1200)
            screenshot_path = TMP_DIR / f"slide_{i+1:02d}.png"
            await page.screenshot(path=str(screenshot_path), full_page=False, omit_background=False)
            print(f"  ✓ Slide {i+1}/{NUM_SLIDES}")

        await browser.close()

    # Merge PNGs into PDF
    import fitz
    doc = fitz.open()
    for i in range(NUM_SLIDES):
        img_path = TMP_DIR / f"slide_{i+1:02d}.png"
        img = fitz.open(str(img_path))
        pdfbytes = img.convert_to_pdf()
        img_pdf = fitz.open("pdf", pdfbytes)
        doc.insert_pdf(img_pdf)
        img.close()
        img_pdf.close()
    doc.save(str(OUT_PDF))
    doc.close()

    size_kb = OUT_PDF.stat().st_size / 1024
    print(f"\n✅ PDF generated: {OUT_PDF}")
    print(f"   Size: {size_kb:.1f} KB | Pages: {NUM_SLIDES}")

asyncio.run(main())

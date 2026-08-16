/**
 * 三端視覺驗收 + 溢出檢測
 *
 * 起因：2026-08-16 我用 `chrome --headless --window-size=390,844` 截圖，
 * 看到手機版文字被切以為有 RWD bug，實際上那只是 headless Chrome 沒有
 * 真 mobile emulation（viewport 實際比 390 寬）。真 emulation 測出來
 * document.scrollWidth === innerWidth，根本沒溢出。
 *
 * 教訓：window-size ≠ mobile emulation。要驗手機版一定要用 devices preset。
 *
 * 用法：
 *   npm i playwright        （在 scratchpad 或專案裡）
 *   node scripts/visual_check.js https://eb-plus-web.vercel.app ./shots
 */
const { chromium, devices } = require("playwright");

const URL = process.argv[2] || "https://eb-plus-web.vercel.app";
const OUT = process.argv[3] || "./shots";

const TARGETS = [
  { name: "desktop", ctx: { viewport: { width: 1440, height: 900 } } },
  { name: "iphone", ctx: { ...devices["iPhone 13"] } },
  { name: "android", ctx: { ...devices["Pixel 7"] } },
];

(async () => {
  const browser = await chromium.launch();
  let fail = 0;

  for (const t of TARGETS) {
    const ctx = await browser.newContext(t.ctx);
    const page = await ctx.newPage();
    const errors = [];
    page.on("console", (m) => m.type() === "error" && errors.push(m.text()));

    await page.goto(URL, { waitUntil: "networkidle" });
    await page.waitForTimeout(2500);

    const info = await page.evaluate(() => {
      const doc = document.documentElement;
      // 找出真正造成橫向溢出的元素，不要只回報「有溢出」
      const offenders = [];
      if (doc.scrollWidth > window.innerWidth) {
        document.querySelectorAll("*").forEach((el) => {
          const r = el.getBoundingClientRect();
          if (r.right > window.innerWidth + 1 || r.left < -1) {
            offenders.push({
              tag: el.tagName.toLowerCase(),
              cls: (el.className || "").toString().slice(0, 70),
              right: Math.round(r.right),
            });
          }
        });
      }
      return {
        vw: window.innerWidth,
        docW: doc.scrollWidth,
        overflow: doc.scrollWidth > window.innerWidth,
        offenders: offenders.slice(0, 5),
      };
    });

    const mark = info.overflow ? "❌ 橫向溢出" : "✅";
    console.log(`${t.name.padEnd(8)} viewport=${info.vw} doc=${info.docW}  ${mark}`);
    if (info.overflow) {
      fail++;
      info.offenders.forEach((o) => console.log(`    ${o.tag}.${o.cls} → right ${o.right}`));
    }
    if (errors.length) {
      console.log(`    ⚠️ console error ×${errors.length}: ${errors[0].slice(0, 90)}`);
    }

    await page.screenshot({ path: `${OUT}/${t.name}.png`, fullPage: false });
    await ctx.close();
  }

  await browser.close();
  console.log(fail ? `\n❌ ${fail} 個裝置有橫向溢出` : "\n✅ 三端皆無橫向溢出");
  process.exit(fail ? 1 : 0);
})();

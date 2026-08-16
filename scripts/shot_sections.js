/** 截兩個重點區塊，人工目視驗收插畫（非自動測試，用完可留著複查） */
const { chromium, devices } = require('playwright');
(async () => {
  const dir = (process.env.SHOT_DIR || '.') + '/';
  const b = await chromium.launch();
  for (const [name, opt] of [
    ['desktop', { viewport: { width: 1440, height: 900 } }],
    ['iphone', devices['iPhone 13']],
  ]) {
    const ctx = await b.newContext(opt);
    const pg = await ctx.newPage();
    await pg.goto('http://localhost:3111/', { waitUntil: 'networkidle' });
    for (const id of ['day', 'blueprint', 'technology']) {
      const el = await pg.$('#' + id);
      await el.scrollIntoViewIfNeeded();
      await pg.waitForTimeout(1500);
      await el.screenshot({ path: `${dir}${name}-${id}.png` });
      console.log(name, id, 'ok');
    }
    await ctx.close();
  }
  await b.close();
})();

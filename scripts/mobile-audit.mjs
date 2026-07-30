// 移动端体验审计：截图 + 横向溢出检测
import { chromium } from 'playwright';

const BASE = process.env.BASE || 'http://127.0.0.1:4173';

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 375, height: 812 },
  isMobile: true,
  hasTouch: true,
  deviceScaleFactor: 2,
  userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1',
});

await page.goto(BASE, { waitUntil: 'networkidle' });
await page.waitForTimeout(2500);

// 横向溢出检测（比例不正常最常见的原因）
const overflow = await page.evaluate(() => {
  const bad = [];
  const docW = document.documentElement.clientWidth;
  for (const el of document.querySelectorAll('*')) {
    const r = el.getBoundingClientRect();
    if (r.width > 0 && (el.scrollWidth > docW + 1 || r.right > docW + 1 || r.left < -1)) {
      const cls = (el.className && el.className.baseVal !== undefined ? el.className.baseVal : el.className) || '';
      if (el.closest('[aria-hidden="true"]')) continue;
      bad.push(`${el.tagName}.${String(cls).split(' ').join('.')} scrollW=${el.scrollWidth} right=${Math.round(r.right)}`);
    }
  }
  return { docW, scrollW: document.documentElement.scrollWidth, bodyScrollW: document.body.scrollWidth, bad: bad.slice(0, 30) };
});
console.log('OVERFLOW:', JSON.stringify(overflow, null, 2));

// 各 section 截图
const sections = ['hero', 'trilogy', 'work', 'about', 'stack', 'contact'];
await page.screenshot({ path: 'mobile-top.png' });
for (const id of sections) {
  const el = await page.$(`#${id}`);
  if (el) {
    await el.scrollIntoViewIfNeeded();
    await page.waitForTimeout(800);
    await page.screenshot({ path: `mobile-${id}.png` });
  } else {
    console.log(`section #${id} NOT FOUND`);
  }
}

await browser.close();
console.log('DONE');

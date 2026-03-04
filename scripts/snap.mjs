import { chromium } from '@playwright/test';

const base = process.env.BASE_URL || 'http://127.0.0.1:3100';
const pages = [
  { path: '/', name: 'home' },
  { path: '/meta-ads', name: 'meta-ads' },
  { path: '/tiktok-ads', name: 'tiktok-ads' },
  { path: '/google-ads', name: 'google-ads' },
  { path: '/pricing', name: 'pricing' },
];

const outDir = 'snapshots';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 390, height: 844 } });

for (const p of pages) {
  const url = base + p.path;
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForTimeout(250);
  await page.screenshot({ path: `${outDir}/${p.name}-mobile.png`, fullPage: true });
  console.log('snap', url);
}

await page.setViewportSize({ width: 1440, height: 900 });
for (const p of pages) {
  const url = base + p.path;
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForTimeout(250);
  await page.screenshot({ path: `${outDir}/${p.name}-desktop.png`, fullPage: true });
  console.log('snap', url);
}

await browser.close();

import { chromium } from 'playwright';
import fs from 'node:fs';

const OUT = '/Users/user/ledenov/research/screens';
fs.mkdirSync(OUT, { recursive: true });

// Competitor + reference set (from research agent, verified 2026-06-16)
const SITES = [
  // Tier 1 — solo / productized for founders
  ['designjoy', 'https://designjoy.co'],
  ['artone-studio', 'https://www.artone.studio'],
  ['saasdesigner', 'https://saasdesigner.com'],
  // Tier 2 — independent senior product designers, minimalist lane
  ['simon-mccade', 'https://www.simonmccade.com'],
  ['oli-batstone', 'https://www.olibatstone.com'],
  ['uxisaac', 'https://www.uxisaac.com'],
  ['btsta', 'https://btsta.me'],
  // Tier 3 — solo-vs-agency framing
  ['uiflip', 'https://uiflip.com'],
  ['anomaly', 'https://www.byanomaly.co'],
  ['startup-design-partners', 'https://www.startupdesignpartners.com'],
  // Aesthetic references (craft only)
  ['rauno', 'https://rauno.me'],
  ['paco-coursey', 'https://paco.me'],
];

const LOGIN_HINTS = ['log in', 'login', 'sign in', 'password', 'enter your email to continue'];

const browser = await chromium.launch({ channel: 'chrome' });
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 2,
  userAgent:
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36',
});

const manifest = [];

for (const [slug, url] of SITES) {
  const page = await ctx.newPage();
  const rec = { slug, url, status: 'ok', finalUrl: url, title: '', loginWall: false, files: [] };
  try {
    const resp = await page.goto(url, { waitUntil: 'networkidle', timeout: 45000 }).catch(async () => {
      // networkidle can hang on animated sites — fall back to domcontentloaded
      return page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });
    });
    rec.httpStatus = resp ? resp.status() : null;
    await page.waitForTimeout(3500); // let hero animations/fonts settle
    rec.finalUrl = page.url();
    rec.title = await page.title().catch(() => '');

    // login-wall heuristic
    const bodyText = (await page.evaluate(() => document.body?.innerText || '').catch(() => '')).toLowerCase();
    const hasPw = await page.locator('input[type="password"]').count().catch(() => 0);
    rec.loginWall = hasPw > 0 || (bodyText.length < 400 && LOGIN_HINTS.some((h) => bodyText.includes(h)));

    const tag = rec.loginWall ? '__LOGIN' : '';
    // above-the-fold
    const fold = `${slug}${tag}__fold.png`;
    await page.screenshot({ path: `${OUT}/${fold}`, fullPage: false });
    rec.files.push(fold);
    // full page (cap height by clipping via fullPage; playwright handles long pages)
    const full = `${slug}${tag}__full.png`;
    await page.screenshot({ path: `${OUT}/${full}`, fullPage: true });
    rec.files.push(full);
  } catch (e) {
    rec.status = 'error';
    rec.error = String(e).split('\n')[0];
  }
  manifest.push(rec);
  console.log(`${rec.status === 'ok' ? '✓' : '✗'} ${slug} (${rec.httpStatus ?? '—'})${rec.loginWall ? ' [?login]' : ''}${rec.error ? ' :: ' + rec.error : ''}`);
  await page.close();
}

fs.writeFileSync(`${OUT}/manifest.json`, JSON.stringify(manifest, null, 2));
await browser.close();
console.log('\nDONE → screens in', OUT);

import { chromium } from 'playwright';
const [url, slug] = [process.argv[2], process.argv[3]];
const OUT = '/Users/user/ledenov/research/screens';
const b = await chromium.launch({ channel: 'chrome' });
const ctx = await b.newContext({ viewport:{width:1440,height:900}, deviceScaleFactor:2 });
const p = await ctx.newPage();
const r = await p.goto(url, { waitUntil:'networkidle', timeout:45000 }).catch(()=>p.goto(url,{waitUntil:'domcontentloaded',timeout:30000}));
await p.waitForTimeout(4000);
// scroll through to trigger lazy-loaded images
await p.evaluate(async()=>{await new Promise(res=>{let y=0;const t=setInterval(()=>{window.scrollBy(0,900);y+=900;if(y>=document.body.scrollHeight){clearInterval(t);res();}},150);});});
await p.waitForTimeout(1500);
await p.evaluate(()=>window.scrollTo(0,0));
await p.waitForTimeout(800);
console.log('http', r&&r.status(), '| title', await p.title());
await p.screenshot({path:`${OUT}/${slug}__fold.png`, fullPage:false});
await p.screenshot({path:`${OUT}/${slug}__full.png`, fullPage:true});
await b.close();
console.log('saved', slug);

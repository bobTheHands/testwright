import { getFilename } from './helpers.js';
import {
  browserType,
  launchConfig,
  contextConfig
} from './config.js';


export async function screenshot(url = "about:blank", dest = "captures/") {
  const outpath = `${dest}/${getFilename(url)}`;

  const browser = await browserType.launch(launchConfig);
  const context = await browser.newContext(contextConfig);
  const page = await context.newPage();
  await page.goto(url);

  await page.title();
  await page.$('::root');

  await page.screenshot({ path: outpath });
  
  await browser.close();
}
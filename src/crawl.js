import { getFilename } from './helpers.js';

import pwConfig from './config.js';

const {
  browserType,
  launchConfig,
  contextConfig
} = pwConfig;

function dumpFrameTree(frame, indent) {
  console.log(indent + frame.url());
  for (const child of frame.childFrames()) {
    dumpFrameTree(child, indent + '  ');
  }
}

export async function screenshot(url = "about:blank", dest = "captures/") {
  const outpath = `${dest}/${getFilename(url)}`;

  const browser = await browserType.launch(launchConfig);

  try {
    const context = await browser.newContext(contextConfig);
    const page = await context.newPage();
    await page.goto(url);
    await page.waitForLoadState('load');
    await page.waitForNavigation();

    // const frames = page.frames();
    // console.log(frames.length);
    // const frame = page.frame({ url: /.*consent.google.com.*/ });
    // await frame.waitForLoadState('load');
    // await frame.waitForNavigation();

    // const frameHandle = await page.$('[src*="consent.google.com"]');
    // const frame = await frameHandle.contentFrame();

    // console.log(frame);
    // console.log('---------------');

    // await frame.click('#introAgreeButton');
    // // await frame.waitForLoadState('load');
    // await frame.waitForNavigation();

    // debugger;
    // await page.pause();

    await new Promise((res, rej) => {
      page.on('dialog', async (dialog) => {
        res(dialog.accept);
      });
    })

    await page.screenshot({ path: outpath });

  } catch (err) {
    console.error(err);
    process.exit();
  }
 
  
  await browser.close();
}
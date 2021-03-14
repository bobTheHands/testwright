import { chromium, firefox, webkit, devices } from 'playwright';

// const DEVICES = {
//   iphon6: 'iPhone 6',
//   iphon11m:'iPhone 11 Max'
// };

// const iPhone = devices.iphon6;

export default {
  browserType: chromium,
  launchConfig : {
    // headless: false,
    // slowmo: 100,
    // debug: true,
  },
  contextConfig: {
    // viewport: iPhone.viewport,
    // userAgent: iPhone.userAgent,
    // viewport: null,
    viewport: { width: 1600, height: 1200 }
  }
};
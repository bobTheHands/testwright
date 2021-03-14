import { chromium, firefox, webkit, devices } from 'playwright';

const DEVICES = {
  iphon6: 'iPhone 6',
  iphon11m:'iPhone 11 Max'
];

const iPhone = devices.iphon6;

export default {
  browserType: webkit,
  launchConfig : {
    headless: false,
    slowmo: 10,
  },
  contextConfig: {
    // viewport: iPhone.viewport,
    // userAgent: iPhone.userAgent,
  }
};
#!/usr/bin/env node
import { Command, Option } from 'commander';
import fs from 'fs';
import path from 'path';
import pw from 'playwright';
import { promisify } from 'util';

import { screenshot } from './crawl.js';

const wf = promisify(fs.writeFile);

const program = new Command();

let opt_browser = new Option('-b, --browser <browser>', 'headless browser to use');
opt_browser = opt_browser.choices(['chromium', 'firefox', 'webkit']);
opt_browser = opt_browser.default('chromium');

let opt_dest = new Option('-d, --dest <folder>', 'destination folder for captures');
opt_dest = opt_dest.default('../captures');

program
.version('0.0.1')
.command('screenshot <url>')
.alias('s')
.description('create a screeshot of url')
.addOption(opt_browser)
.addOption(opt_dest)
.action((url, opts, command) => screenshot(url, opts.dest));



(async function main() {
  await program.parseAsync();
})();
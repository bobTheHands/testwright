#!/usr/bin/env node
const { Command, Option } = require('commander');
const fs = require('fs');
const path = require('path');
const pw = require('playwright');
const { promisify } = require('util');

const wf = promisify(fs.writeFile);

const program = new Command();

let opt_browser = new Option('-b, --browser <browser>', 'headless browser to use');
opt_browser = opt_browser.choices(['chromium', 'firefox', 'webkit']);
opt_browser = opt_browser.default('chromium');

let opt_dest = new Option('-d, --dest <folder>', 'destination folder for captures');
opt_dest = opt_dest.default('captures');

program
.version('0.0.1')
.command('screenshot <url>')
.alias('s')
.description('create a screeshot of url')
.addOption(opt_browser)
.addOption(opt_dest)
.action(screenshot);



(async function main() {
  await program.parseAsync();
})();
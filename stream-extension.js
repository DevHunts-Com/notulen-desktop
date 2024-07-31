const fs = require('fs');
const path = require('path');

const puppeteerStreamDistPath = path.resolve(__dirname, 'node_modules/puppeteer-stream/dist/PuppeteerStream.js');
let puppeteerStreamDist = fs.readFileSync(puppeteerStreamDistPath, 'utf-8');

puppeteerStreamDist = puppeteerStreamDist.replace(
  'path.join(__dirname, "..", "extension");',
  'path.join(__dirname.replace("app.asar", "app.asar.unpacked"), "..", "extension");'
);

fs.writeFileSync(puppeteerStreamDistPath, puppeteerStreamDist);

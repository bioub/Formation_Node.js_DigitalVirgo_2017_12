const fs = require('fs-extra');
const path = require('path');
const co = require('co');

function log(filePath, msg) {
  const line = `[${(new Date).toISOString()}] ${msg}\n`;
  return fs.appendFile(filePath, line);
}

const logDir = path.resolve(__dirname, 'logs');
const logFile = path.resolve(logDir, 'app.log');

console.time('thread idle');
console.time('Logs done');

co(function* () {
  yield log(logFile, 'Ligne 1');
  yield log(logFile, 'Ligne 2');
  yield log(logFile, 'Ligne 3');
  yield log(logFile, 'Ligne 4');
  yield log(logFile, 'Ligne 5');
  console.timeEnd('Logs done');
});

console.timeEnd('thread idle');

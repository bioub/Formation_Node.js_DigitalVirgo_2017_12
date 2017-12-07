const fs = require('fs-extra');
const path = require('path');

function log(filePath, msg) {
  const line = `[${(new Date).toISOString()}] ${msg}\n`;
  return new Promise((resolve, reject) => {
    fs.appendFile(filePath, line, (err) => {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  });
}

const logDir = path.resolve(__dirname, 'logs');
const logFile = path.resolve(logDir, 'app.log');

console.time('thread idle');
console.time('Logs done');
fs.stat(logDir)
  .catch(err => {
    if (err.code === 'ENOENT') {
      return fs.mkdir(logDir);
    }
    throw err;
  })
  .then(() => log(logFile, 'Ligne 1'))
  .then(() => log(logFile, 'Ligne 2'))
  .then(() => log(logFile, 'Ligne 3'))
  .then(() => log(logFile, 'Ligne 4'))
  .then(() => log(logFile, 'Ligne 5'))
  .then(() => {
    console.timeEnd('Logs done');
  })
  .catch((err) => {
    console.log('Erreur : ' + err.message);
  });

console.timeEnd('thread idle');

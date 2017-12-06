const fs = require('fs');
const path = require('path');
const async = require('async');

function log(filePath, msg, cb) {
  const line = `[${(new Date).toISOString()}] ${msg}\n`;
  fs.appendFile(filePath, line, cb);
}

const logDir = path.resolve(__dirname, 'logs');
const logFile = path.resolve(logDir, 'app.log');

console.time('thread idle');
console.time('Logs done');
fs.stat(logDir, (err, stats) => {
  if (err && err.code === 'ENOENT') {
    return fs.mkdir(logDir, (err) => {
      if (err) {
        return console.log('Erreur : ' + err.message);
      }
      // on continue si logs vient d'être créé
      next();
    });
  }
  // on continue si logs existe
  next();
});
console.timeEnd('thread idle');

// Callback Hell
function next() {
  async.series([
    (next) => log(logFile, 'Ligne 1', next),
    (next) => log(logFile, 'Ligne 2', next),
    (next) => log(logFile, 'Ligne 3', next),
    (next) => log(logFile, 'Ligne 4', next),
    (next) => log(logFile, 'Ligne 5', next),
  ], (err) => {
    if (err) {
      return console.log('Erreur : ' + err.message);
    }
    console.timeEnd('Logs done');
  });
}

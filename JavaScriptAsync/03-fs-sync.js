const fs = require('fs');
const path = require('path');

function log(filePath, msg) {
  const line = `[${(new Date).toISOString()}] ${msg}\n`;
  fs.appendFileSync(filePath, line);
}

const logDir = path.resolve(__dirname, 'logs');
const logFile = path.resolve(logDir, 'app.log');

console.time('thread idle');
console.time('Logs done');

try {
  try {
    const stats = fs.statSync(logDir);
  }
  catch (err) {
    if (err.code === 'ENOENT') {
      fs.mkdirSync(logDir);
    }
  }

  log(logFile, 'Ligne 1');
  log(logFile, 'Ligne 2');
  log(logFile, 'Ligne 3');
  log(logFile, 'Ligne 4');
  log(logFile, 'Ligne 5');
  console.timeEnd('thread idle');
  console.timeEnd('Logs done');
}
catch (err) {
  console.log('Erreur : ' + err.message);
}

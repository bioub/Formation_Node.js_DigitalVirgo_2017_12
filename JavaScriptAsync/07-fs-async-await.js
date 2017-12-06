const fs = require('fs-extra');
const path = require('path');

function log(filePath, msg) {
  const line = `[${(new Date).toISOString()}] ${msg}\n`;
  return fs.appendFile(filePath, line);
}

const logDir = path.resolve(__dirname, 'logs');
const logFile = path.resolve(logDir, 'app.log');

console.time('thread idle');
console.time('Logs done');
async function logs() {
  try {
    try {
      const stats = await fs.stat(logDir);
    }
    catch (err) {
      if (err.code === 'ENOENT') {
        await fs.mkdir(logDir);
      }
    }

    await log(logFile, 'Ligne 1');
    await log(logFile, 'Ligne 2');
    await log(logFile, 'Ligne 3');
    await log(logFile, 'Ligne 4');
    await log(logFile, 'Ligne 5');
    console.timeEnd('Logs done');
  }
  catch (err) {
    console.log('Erreur : ' + err.message);
  }
}

logs();
console.timeEnd('thread idle');

const fs = require('fs');

const files = fs.readdirSync(__dirname);

for (let file of files) {
  if (file.startsWith('test-')) {
    require(`./${file}`); // sync
  }
}
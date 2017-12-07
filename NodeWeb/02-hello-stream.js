const fs = require('fs');
const path = require('path');

const editorConfigPath = path.resolve(__dirname, '.editorconfig');

const rs = fs.createReadStream(editorConfigPath);
// cat .editorconfig | echo
rs.pipe(process.stdout);

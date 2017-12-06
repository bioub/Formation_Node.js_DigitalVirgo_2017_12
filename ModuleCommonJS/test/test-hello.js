// (function (exports, require, module, __filename, __dirname) {
const assert = require('assert');
const hello = require('../src/hello');

try {
  assert.strictEqual(hello('Romain'), 'Bonjour Romain');
  console.log('Tests de hello.js OK');
}
catch (err) {
  console.log('Erreur(s) dans les tests de hello.js');
  process.exit(1);
}

// });
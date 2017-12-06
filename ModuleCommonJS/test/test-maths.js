// (function (exports, require, module, __filename, __dirname) {
const assert = require('assert');
const maths = require('../src/maths');

try {
  assert.strictEqual(maths.sum(1, 2), 3);
  assert.strictEqual(maths.sum('1', '2'), 3);
  
  assert.strictEqual(maths.substract(1, 2), -1);
  assert.strictEqual(maths.substract('1', '2'), -1);
  console.log('Tests de maths.js OK');
}
catch (err) {
  console.log('Erreur(s) dans les tests de maths.js');
  process.exit(1);
}


// });
// (function (exports, require, module, __filename, __dirname) {
const convertToNumber = Number; // pas exporté
const sum = (a, b) => convertToNumber(a) + convertToNumber(b);
exports.substract = (a, b) => a - b
const multiply = (a, b) => a * b;
module.exports.divide = (a, b) => a / b;

exports.sum = sum;
module.exports.multiply = multiply;
// });
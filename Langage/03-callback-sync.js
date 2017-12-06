const nbs = [2, 3, 4];

nbs.forEach((...args) => {

});

const sum = nbs.reduce((acc, nb) => acc + nb, 0);
console.log('sum', sum); // 9

// 0 + 2 = 2
// 2 + 3 = 5
// 5 + 4 = 9

nbs
  .filter((elt, i) => elt % 2 === 0)
  .map((elt, i) => elt * elt)
  .forEach((elt, i) => {
    console.log(elt, i);
  });


// call stack
// ^
// |
// |
// |
// |
// |cb-cb-cb cb-cb-cb cb-cb-cb
// |filter  -map     -forEach -log
// +-----------------------------------> temps

console.log('fin');

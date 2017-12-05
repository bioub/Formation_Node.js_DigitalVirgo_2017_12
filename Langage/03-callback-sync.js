const nbs = [2, 3, 4];

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
// |cb-cb-cb
// |forEach - log
// +-----------------------------------> temps

console.log('fin');

const nbs = [2, 3, 4];

nbs.forEach(function(elt, i) {
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

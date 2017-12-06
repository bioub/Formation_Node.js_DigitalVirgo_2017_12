setTimeout(function timeoutA() {
  console.log('1000ms A')
}, 1000);

setTimeout(function timeoutB() {
  console.log('1000ms B')
}, 1000);

// console.log(timeout); // undefined

// call stack
// ^
// |
// |
// |
// |
// |               idle  log      log       idle
// |setT-setT-log ...... timeoutA-timeoutB .......
// +-----------------------------------> temps
//
// callback queue :

console.log('fin');

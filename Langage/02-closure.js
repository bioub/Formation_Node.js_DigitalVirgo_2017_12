function externe(msg) {
  // Closure : portée sauvegardée
  // 2 conditions pour créer une closure
  // - 1/ une fonction imbriquée (dans une fonction ou dans un bloc depuis ES6)
  // - 2/ la fonction imbriquée soit appelée en dehors

  function interne() {
    console.log(msg);
  }

  return interne;
}

// console.log(typeof interne); // undefined
const hello = externe('Hello');
const bye = externe('Bye');
console.log(hello === bye); // false - 2 fonctions différentes

hello();

// Cas pratique : boucle avec un callback async
// Dans 1000ms : 3 3 3
for (var i=0; i<3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}

// Dans 0ms : 3 3 3
for (var i=0; i<3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 0);
}

// Dans 1000ms : 0 1 2
for (var i=0; i<3; i++) {
  setTimeout(externe(i), 1000);
}

// Dans 1000ms : 0 1 2
for (let i=0; i<3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}

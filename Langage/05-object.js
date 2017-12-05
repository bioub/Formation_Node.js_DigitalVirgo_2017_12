// 1 - Plein d'objets existants

// définis au niveau du langage :
console.log(typeof Math); // object

// définis au niveau de Node.js :
console.log(typeof process); // object

// définis au niveau du navigateur :
console.log(typeof document); // undefined (object dans le navigateur)

// définis au niveau du navigateur et Node.js :
console.log(typeof console); // object

// 2 - Extensibilité (object JS <=> Map, struct, dict, tableau associatif)
console.log(Math.sum); // undefined

// ajouter des clés / valeurs
Math.sum = (a, b) => a + b; // Mauvaise pratique d'étendre des objets du langage
console.log(Math.sum(1, 2)); // 3

// modifier des clés / valeurs
Math.sum = (a, b) => Number(a) + Number(b);
console.log(Math.sum(1, 2)); // 3

// supprimer des clés / valeurs
delete Math.sum;

const pileOuFace = () => Math.random() > 0.5 ? 'pile' : 'face';
console.log(pileOuFace());
console.log(pileOuFace());
console.log(pileOuFace());
console.log(pileOuFace());
console.log(pileOuFace());

// tester pile ou face
const backupRandom = Math.random;
Math.random = () => 0.25; // Monkey Patch
console.log(pileOuFace()); // face
Math.random = () => 0.75;
console.log(pileOuFace()); // pile
Math.random = backupRandom;

// Créer un objet de manière ponctuel (une seule fois avec des méthodes) ou plusieurs fois sans méthodes
// object literal
const coords = {
  x: 10,
  y: 20,
};

coords.z = 30; // extensibilité

console.log(coords.x); // 10

const myMaths = {
  sum: (a, b) => a + b,
};

console.log(myMaths.sum(1, 2)); // 3

// Objet multi-instancié créé simplement et sans méthode (fabrique)
const coordsFactory = (x, y, z) => {
  const obj = {};
  if (x !== undefined) {
    obj.x = x;
  }
  if (y !== undefined) {
    obj.y = y;
  }
  if (z !== undefined) {
    obj.z = z;
  }
  return obj;
}
const coords2d = coordsFactory(10, 20);
const coords3d = coordsFactory(10, 20, 30);

// Objet multi-instancié créé simplement et avec méthode (fonction constructeur)
const Contact = function(prenom) {
  this._prenom = prenom;
};

Contact.prototype.hello = function() {
  return 'Bonjour je m\'appelle ' + this._prenom;
};

const romain = new Contact('Romain');
const eric = new Contact('Eric');
console.log(typeof romain); // object

console.log(romain._prenom); // romain . trouve la clé dans l'objet
console.log(romain.hello()); // Bonjour je m'appelle Romain . dans un 2e temps trouve le proto de Contact
console.log(romain.hasOwnProperty('_prenom')); // true . dans un 3e temps regarde dans les proto chainées
console.log(romain.hasOwnProperty('hello')); // false . dans un 3e temps regarde dans les proto chainées
console.log(romain.truc); // undefined

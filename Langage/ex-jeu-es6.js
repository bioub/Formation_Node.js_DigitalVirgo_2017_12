// 1 - Utiliser method properties
const Random = {
  get: function () {
    return Math.random();
  },
  getArbitrary: function (min, max) {
    return Math.random() * (max - min) + min;
  },
  getInt: function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  },
  getIntInclusive: function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  },
};

const readline = require('readline');

// 2 - Utiliser Class
const Jeu = function(options) {
  // 3 - Default params pour options
  options = options || {};

  // 4 - Destructurer l'objet
  const min = options.min || 0;
  const max = (options.max !== undefined) ? options.max : 100;

  this._rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  this._entierAlea = Random.getIntInclusive(min, max);
  this._essais = [];
};

Jeu.prototype.jouer = function() {
  if (this._essais.length) {
    // 5 - Template string
    console.log('Vous avez déjà joué : ' + this._essais.join(' - '));
  }

  this._rl.question('Quel est le nombre ? ', (answer) => {

    const entierSaisi = Number.parseInt(answer);

    if (Number.isNaN(entierSaisi)) {
      // PAS DE throw
      console.log('Erreur : il faut saisir un nombre');
      return this.jouer();
    }

    this._essais.push(entierSaisi);

    if (entierSaisi < this._entierAlea) {
      console.log('Trop petit');
      return this.jouer();
    }

    if (entierSaisi > this._entierAlea) {
      console.log('Trop grand');
      return this.jouer();
    }

    console.log('Gagné !');
    this._rl.close();
  });
};

// call stack
// ^
// |
// |
// |
// |                                             question
// |                        question  idle   log-jouer
// |require-createInterface-jouer    ....... cb             .....
// +-----------------------------------> temps
//
// callback queue : cb

const jeu = new Jeu();
jeu.jouer();

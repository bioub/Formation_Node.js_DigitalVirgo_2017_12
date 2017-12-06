// 1 - Utiliser method properties
const random = {
  get() {
    return Math.random();
  },
  getArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  },
  getInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  },
  getIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  },
};

const readline = require('readline');

// 2 - Utiliser Class
class Jeu {

  // 3 - Default params pour options
  constructor(options = {}) {

    // 4 - Destructurer l'objet
    const {min = 0, max = 100} = options;

    this._rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    this._entierAlea = random.getIntInclusive(min, max);
    this._essais = [];
  }
  jouer() {
    if (this._essais.length) {
      // 5 - Template string
      console.log(`Vous avez déjà joué : ${this._essais.join(' - ')}`);
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
  }
}


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



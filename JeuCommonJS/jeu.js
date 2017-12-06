'use strict';

const readline = require('readline'); // binaire Node
const chalk = require('chalk'); // node_modules
const random = require('./random'); // local

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
      console.log(chalk.bgYellow(`Vous avez déjà joué : ${this._essais.join(' - ')}`));
    }
    this._rl.question(chalk.blue('Quel est le nombre ? '), (answer) => {
      const entierSaisi = Number.parseInt(answer);
      if (Number.isNaN(entierSaisi)) {
        // PAS DE throw
        console.log(chalk.red('Erreur : il faut saisir un nombre'));
        return this.jouer();
      }
      this._essais.push(entierSaisi);
      if (entierSaisi < this._entierAlea) {
        console.log(chalk.yellow('Trop petit'));
        return this.jouer();
      }
      if (entierSaisi > this._entierAlea) {
        console.log(chalk.yellow('Trop grand'));
        return this.jouer();
      }
      console.log(chalk.green('Gagné !'));
      this._rl.close();
    });
  }
}

module.exports = Jeu;
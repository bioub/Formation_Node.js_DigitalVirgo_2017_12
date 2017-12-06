// 'use strict';

global.prenom = 'Gloris';
const contact = {
  prenom: 'Romain',
};

function hello(p1, p2) {
  // Erreur en mode strict;
  console.log('Bonjour ' + p1 + ', ' + p2 + ' je suis ' + this.prenom);
}

hello('Toto', 'Titi');
hello.call(contact, 'Toto', 'Titi');
hello.apply(contact, ['Toto', 'Titi']);
hello.call(contact, ...['Toto', 'Titi']);


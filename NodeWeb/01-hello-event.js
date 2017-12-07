const { EventEmitter } = require('events');

const ee = new EventEmitter();

const createUser = (prenom) => {
  // TODO insert in DB
  ee.emit('user.created', prenom);
};

ee.on('user.created', (prenom) => {
  // TODO envoyer un mail
  console.log('User created ', prenom);
});

ee.once('user.created', (prenom) => {
  // TODO envoyer un mail
  console.log('User created once', prenom);
});

createUser('Romain');
createUser('Jean');

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const jouer = function() {
  rl.question('What do you think of Node.js? ', (answer) => {
    // TODO: Log the answer in a database
    console.log(`Thank you for your valuable feedback: ${answer}`);

    // rejouer
    jouer();

    // fin de partie
    // rl.close();
  });
};

jouer();

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

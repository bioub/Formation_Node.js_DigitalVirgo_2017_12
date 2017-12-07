const http = require('http');

const server = http.createServer();

server.on('close', () => {
  console.log('close');
});
server.on('request', (req /* IncomingMessage */, res /* ServerResponse */) => {
  switch (req.url) {
    case '/':
      res.statusCode = 200;
      res.setHeader('Content-type', 'text/plain; charset=utf-8');
      res.write('Bonjour');
      res.end();
      break;
    case '/redirect':
      res.statusCode = 302;
      res.setHeader('Location', 'https://www.google.fr/');
      res.end();
      break;
    default:
      res.statusCode = 404;
      res.setHeader('Content-type', 'text/plain; charset=utf-8');
      res.write('404 Not Found');
      res.end();
  }
});
server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.log('Erreur : le port est déjà utilisé');
  }
});
server.on('listening', () => {
  console.log('Le serveur a démarré');
});

server.listen(1234);

// call stack
// ^
// |
// |
// |
// |
// |                       idle  log        idle  sh-wr-end  sh-wr-end   sh-wr-end
// |cs-on-on-on-on-listen ...... listening ...... request  - request   - request
// +---------------------------------------------------------> temps
//
// callback queue : request - request

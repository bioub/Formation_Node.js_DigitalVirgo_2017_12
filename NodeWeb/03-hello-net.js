const net = require('net');

const server = net.createServer();

server.on('close', () => {
  console.log('close');
});
server.on('connection', (socket) => {
  socket.pipe(process.stdout);
  socket.write('HTTP/1.1 200 OK\r\n');
  socket.write('Host: localhost\r\n');
  socket.write('Content-type: text/plain\r\n');
  socket.write('\r\n');
  socket.write('Bonjour\r\n');
  socket.end();
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

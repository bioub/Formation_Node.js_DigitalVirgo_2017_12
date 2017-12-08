const app = require('./app');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', { useMongoClient: true });
mongoose.Promise = global.Promise;

app.listen(8080, () => {
  console.log('Le serveur démarré');
});

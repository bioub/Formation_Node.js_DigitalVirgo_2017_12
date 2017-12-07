const express = require('express');

const app = express();

const contacts = [{
  prenom: 'Jean',
  nom: 'Dupont',
  id: 123,
}, {
  prenom: 'Eric',
  nom: 'Martin',
  id: 456,
}]

// Exercice :
// Créer 3 routes
// GET /api/contacts, retourne en JSON le tableau complet
// GET /api/contacts/123, retourne en JSON le contact 123
// Ensuite rendre 123 paramétrable
// DELETE /api/contacts/123, qui supprime et retourne en JSON le contact supprimer
// Prévoir des erreurs 404, si le contact n'existe pas (pour les DELETE et GET params)

app.all('/', (req, res, next) => {
  res.send(`<h2>Bonjour</h2>`);
});

app.get('/redirect', (req, res, next) => {
  res.redirect(`https://www.google.com/`);
});

app.get('/hello/:prenom', (req, res, next) => {
  res.send(`<h2>Bonjour ${req.params.prenom}</h2>`)
});

app.get(/\/bon(jour|soir)/, (req, res, next) => {
  res.send(`<h2>Hello</h2>`)
});

app.get('/api/hello/:prenom', (req, res, next) => {
  res.json({
    prenom: req.params.prenom
  });
});

app.listen(8080, () => {
  console.log('Le serveur démarré');
});

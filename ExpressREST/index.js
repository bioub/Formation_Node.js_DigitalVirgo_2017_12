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
}];

// Service Tableau
const service = {
  getList: () => Promise.resolve(contacts),
  getById: (id) => {
    if (typeof id !== 'number') {
      id = Number(id);
    }
    const contact = contacts.find(c => c.id === id);
    return Promise.resolve(contact);
  },
  deleteById: (id) => {
    if (typeof id !== 'number') {
      id = Number(id);
    }
    const contact = contacts.find(c => c.id === id);
    if (contact) {
      const i = contacts.indexOf(contact);
      contacts.splice(i, 1);
    }
    return Promise.resolve(contact);
  },
};

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

app.get('/api/contacts', async (req, res, next) => {
  const contacts = await service.getList(); // Service Layer
  res.json(contacts);
});

app.get('/api/contacts/:id', async (req, res, next) => {
  const contact = await service.getById(req.params.id); // Service Layer
  if (!contact) {
    req.notFoundReason = `Contact ${req.params.id} not found`;
    return next();
  }
  res.json(contact);
});

app.delete('/api/contacts/:id', async (req, res, next) => {
  const contact = await service.deleteById(req.params.id); // Service Layer
  if (!contact) {
    req.notFoundReason = `Contact ${req.params.id} not found`;
    return next();
  }
  res.json(contact);
});

// 404 Middleware
app.use('/api', (req, res, next) => {
  res.statusCode = 404;
  res.json({
    msg: req.notFoundReason || 'Not Found',
  });
});


app.listen(8080, () => {
  console.log('Le serveur démarré');
});

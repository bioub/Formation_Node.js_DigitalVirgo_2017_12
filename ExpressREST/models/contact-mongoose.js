const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  prenom: {
    type: String,
    required: true,
  },
  nom: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    validate: {
      validator: (email) => email.indexOf('@') !== -1, // TODO REGEX
    }
  },
  telephone: String,
  dateNaissance: Date,
});

const Contact = mongoose.model('contact', schema);

// Service Tableau
module.exports = {
  getList: () => Contact.find(),
  getById: (id) => {
    // TODO Exercice
    return Promise.resolve();
  },
  deleteById: (id) => {
    // TODO Exercice
    return Promise.resolve();
  },
  create: (contact) => Contact.create(contact),
};

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
module.exports = {
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
  create: (contact) => {
    contact.id = contacts.reduce((max, c) => c.id > max ? c.id : max, 0) + 1;
    contacts.push(contact);

    return Promise.resolve(contact);
  }
};

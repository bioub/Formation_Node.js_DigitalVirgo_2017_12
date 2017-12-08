// Exercice 1
// Ecrire le test de notFound
//
const notFound = require('../../middlewares/not-found');
const sinon = require('sinon');

describe('Middleware not found', () => {
  it('should call res.json', () => {

    const req = {};
    const res = {
      json: sinon.spy(),
    };
    const next = sinon.spy();

    notFound(req, res, next);

    // Vérif : 404
    // json appelée (avec les bonnes données)
  });
})

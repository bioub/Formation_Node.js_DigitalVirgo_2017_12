const assert = require('assert');
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
chai.should();
chai.use(sinonChai);
chai.use(chaiHttp);

const hello = (prenom) => `Bonjour ${prenom}`;
const withCallback = (next) => {
  next();
};

describe('Hello Tests suite', () => {
  describe('hello function', () => {
    it('should return Bonjour Romain when called with Romain', () => {
      assert.strictEqual(hello('Romain'), 'Bonjour Romain'); // Style TDD
      expect(hello('Romain')).to.equals('Bonjour Romain'); // Style BDD (expect)
      hello('Romain').should.be.equals('Bonjour Romain') // Style BDD (should)
    });
    it('should return Bonjour undefined when called with nothing', () => {
      assert.strictEqual(hello(), 'Bonjour undefined');
    });
  });

  describe('setTimeout (async test)', () => {
    it('should call my callback in 1s', (done) => {
      setTimeout(() => {
        assert(true);
        done();
      }, 1000);
    });
  });

  describe('withCallback (avec un cb)', () => {
    it('should call next', () => {
      const cb = sinon.spy();
      withCallback(cb);

      assert(cb.calledOnce);
      cb.should.have.been.calledOnce;
      expect(cb).to.have.been.calledOnce;
    });
  });

  describe('functionnal', () => {
    it('should return 200', (done) => {

      // chai.request(app)
      chai.request('https://www.google.fr')
        .get('/')
        .end(function (err, res) {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          done();
      });

    });
  });



});

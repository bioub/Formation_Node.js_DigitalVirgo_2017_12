const contact = {
  prenom: 'Romain',
  hello: function() {
    console.log('Bonjour je suis ' + this.prenom);
  },
  helloAsync: function() {
    setTimeout(function() {
      console.log('Bonjour je suis ' + this.prenom);
    }, 100);
  }
}

contact.hello();
contact.helloAsync();

const contactES3 = {
  prenom: 'Romain',
  hello: function() {
    console.log('Bonjour je suis ' + this.prenom);
  },
  helloAsync: function() {
    const that = this;
    setTimeout(function() {
      console.log('ES3 Bonjour je suis ' + that.prenom);
    }, 100);
  }
};

contactES3.helloAsync();

const contactES5 = {
  prenom: 'Romain',
  hello() {
    console.log('ES5 Bonjour je suis ' + this.prenom);
  },
  helloAsync: function() {
    setTimeout(this.hello.bind(this), 100);
  }
};

contactES5.helloAsync();

// Polyfill de bind
// Function.prototype.bind = function(that) {
//   return function() {
//     this.call(that);
//   };
// };

const contactES6 = {
  prenom: 'Romain',
  hello: function() {
    console.log('ES6 Bonjour je suis ' + this.prenom);
  },
  helloAsync() {
    setTimeout(() => {
      console.log('ES6 Bonjour je suis ' + this.prenom);
    }, 100);
  }
};

contactES6.helloAsync();

/*
$('.btn').click((e) => {
  // NE PAS UTILISER this
  e.target.value
});
document.querySelector('.btn').addEventListener('click', (e) => {
  // NE PAS UTILISER this
  e.target.value
});
*/

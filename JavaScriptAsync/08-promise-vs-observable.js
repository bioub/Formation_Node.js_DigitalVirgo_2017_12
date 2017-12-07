const { Observable } = require('rxjs');

const timeout = (delay) => {
  return new Promise(resolve => {
    setTimeout(resolve, delay, delay);
  });
};

timeout(1000)
  .then(() => {
    console.log('1s');
    return timeout(1000)
  })
  .then(() => {
    console.log('2s');
    return timeout(1000)
  })
  .then(() => {
    console.log('3s');
  });

Promise.all([timeout(400), timeout(200), timeout(300)])
  .then((delays) => {
    console.log(delays.join(' - '));
  });

/* PROMISES NE FONCTIONNENT PAS POUR LES CALLBACKS QUI SE REPETENT
const interval = (delay) => {
  return new Promise(resolve => {
    setInterval(resolve, delay, delay);
  });
};

interval(1000)
  .then((delay) => {
    console.log(delay + 'ms');
  });
*/

const interval = (delay) => {
  return new Observable(observer => {
    setInterval(() => {
      observer.next(delay);
    }, delay);
  });
};

/*
interval(1000)
  .subscribe((delay) => {
    console.log(delay + 'ms');
  });
  */

Observable.interval(1000)
  .filter(i => i % 2 === 0)
  .map(i => (i + 1) + 's')
  .subscribe(str => {
    console.log(str);
  });

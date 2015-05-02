let request = require('request-promise');
let run = require('./run');

run(function*(){
  try {
    let response = yield request('http://getbootstrap-does-not-exist.com');
    console.log(response);
  } catch(err) {
    console.error('Error requesting URL')
    console.error(err);
  }
});

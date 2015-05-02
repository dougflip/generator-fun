let request = require('request-promise');
let run = require('./run');

run(function*(){
  try {
    console.log('About to send some async...');
    let nodejs = yield request('http://nodejs.org/');
    let github = yield request('http://www.github.com');
    console.log('Finished multiple async work...sweet');

    console.log(nodejs.substr(0, 500));
    console.log('--------------------------------------------');
    console.log(github.substr(0, 500));
  } catch(err) {
    console.error('Error requesting URL')
    console.error(err);
  }
});

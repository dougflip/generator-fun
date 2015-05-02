let request = require('request-promise');
let co = require('co');

co(function*(){
  console.log('About to send some async...');
  let nodejs = yield request('http://nodejs.org/');
  let github = yield request('http://www.github.com');
  console.log('Finished multiple async work...sweet');

  console.log(nodejs.substr(0, 500));
  console.log('--------------------------------------------');
  console.log(github.substr(0, 500));

  // co can run these in parallel too!
  var responses = yield [
    request('https://tessel.io/'),
    request('http://koajs.com/')
  ]
  console.log('Multiple requests in paralell!');
  responses.forEach(x => console.log(x.substr(0,500)))
}).catch(console.error);

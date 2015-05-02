let request = require('request-promise');
let run = require('./run');

run(function*(){
  let response = yield request('http://getbootstrap.com');
  console.log(response);
});

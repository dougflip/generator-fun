let request = require('request-promise');

(async function(){
  try {
    console.log('Awaiting async code...');
    let nodejs = await request('http://nodejs.org');
    let github = await request('http://www.github.com');
    console.log('Finished multiple async work...sweet');

    console.log(nodejs.substr(0, 500));
    console.log('--------------------------------------------');
    console.log(github.substr(0, 500));
  } catch(err) {
    console.error('Error requesting URL')
    console.error(err);
  }
})();

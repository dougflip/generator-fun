// Recursively call the iterator
//  making a huge assumption that it will only ever yield promises.
// This allows for multiple yield statements in a single run block
function run(generatorFn){

  // invoke the generator and store the iterator
  let it = generatorFn();

  // Use an IIFE to kick off the iteration process
  // We manually call .next on the first go to start the process
  //  and then yielded promises will drive each iteration
  (function advanceIterator(current){
    // if the iterator ran to completion then nothing for us to do
    if(current.done) return;

    // otherwise we assume we were yielded a promise
    //  wire it up to handle the promise and advance the iterator
    current.value
      .then(response => advanceIterator(it.next(response)))
      .catch(it.throw);

  })(it.next())
}

module.exports = run;

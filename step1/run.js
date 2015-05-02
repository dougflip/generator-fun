function run(genFn){
  let generator = genFn();
  let promise = generator.next().value;
  promise.then(generator.next)
}

module.exports = run;

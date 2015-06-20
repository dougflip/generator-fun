function run(genFn){
  let generator = genFn();
  let promise = generator.next().value;
  promise.then(res => generator.next(res));
}

module.exports = run;

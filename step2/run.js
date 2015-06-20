function run(genFn){
  let generator = genFn();
  let promise = generator.next().value;
  promise
    .then(res => gen.next(res))
    .catch(err => generator.throw(err));
}

module.exports = run;

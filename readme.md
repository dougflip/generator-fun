Generator Fun
================

Playing around with [es6 generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*)

## Install

```
npm install
```

## Running the Code

Each step folder can be run (explained more below) and there are scripts for each:

- `npm run start:1` - runs the "step1" dir
- `npm run start:2` - runs the "step2" dir
- `npm run start:3` - runs the "step3" dir
- `npm run start:4` - runs the "step4" dir

## The "Steps"

Each "step" folder is a progressive iteration towards a `run` function which can
facilitate iterating multiple yielded promises. I want a final syntax like this:

```
run(function*(){
  var nodejs = yield request('http://nodejs.org/');
  var github = yield request('http://www.github.com');

  // both requests are complete at this point - looks sync
})
```

It seemed easier to compare as separate directories rather than separate commits
or branches. I know I'll forget how all of this works after not using generators
for a week so I am hoping this can help get my head back to where it is now.

Obviously I don't want to implement a `run` function myself in a real project.
Building a simple one is just to help with understanding generators.
The step4 dir uses [co](https://github.com/tj/co) which has a similar syntax,
but is a full implementation including parallel support.

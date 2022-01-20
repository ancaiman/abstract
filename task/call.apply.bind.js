const log = console.log;

class User {
  constructor(options) {
    this.name = options.name;
    this.age = options.age;
  }
}

const user = new User({name: 'Papa', age: 30});

function getNameAndAge() {
  return `My name is: ${this.name}, I'm ${this.age} years old`;
}

Function.prototype.myBind = function(context, ...rest) {
  let fn = this;
  return function (...arr) {
    return fn.myCall(context, arr.concat(rest));
  }
};

Function.prototype.myCall = function(context, ...rest) {
  context.fn = this;
  return context.fn(...rest);
};

Function.prototype.myApply = function(context, args) {
  context.fn = this;
  return context.fn(args);
};

const sayNameAndAgeBind = getNameAndAge.myBind(user);
const sayNameAndAgeCall = getNameAndAge.myCall(user);
const sayNameAndAgeApply = getNameAndAge.myApply(user)

log(sayNameAndAgeBind());
log(sayNameAndAgeCall);
log(sayNameAndAgeApply);
log(user)
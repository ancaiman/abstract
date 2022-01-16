const log = console.log;

class User {
  constructor(options) {
    this.name = options.name;
    this.age = options.age;
  }
}

function getNameAndAge() {
  return `My name is: ${this.name}, I'm ${this.age} years old`;
}

User.prototype.myBind = Function.prototype.call.bind(Function.prototype.bind);
User.prototype.myCall = Function.prototype.call.bind(Function.prototype.call);
User.prototype.myApply = Function.prototype.apply.bind(Function.prototype.apply);

const user = new User({name: 'Papa', age: 30});

const sayNameAndAgeBind = user.myBind(getNameAndAge, user);
const sayNameAndAgeCall = user.myCall(getNameAndAge, user);
const sayNameAndAgeApply = user.myApply(getNameAndAge, [user])

log(sayNameAndAgeBind());
log(sayNameAndAgeCall);
log(sayNameAndAgeApply);
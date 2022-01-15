const log = console.log;
// let arr = [1,2,3,4,5,6,7,8,9,10];
// function moveToStart(arr, n) {
//   return (arr.length <= n || n <= 0
//     ? arr.slice()
//     : arr.slice(-n).concat(arr.slice(0, arr.length - n)));
// }

// log(moveToStart(arr, 11));
// log(arr);

/* ------------ */

// const data1 = [false, true, {}, 1, 0, NaN, []];
// function hasArrays(arr) {
//   for (let item of arr) {
//     if (Array.isArray(item)) return true;
//   }

//   return false;
// }

// log(hasArrays(data1));

/* ------------ */

// const data = [1, 2, 3, 4, 5, 6]
// const findEven = ;
// const findOdd = ;
// function getNumberByParity(data, type) {
//   if (Array.isArray(data) && ((type === 'even') || (type === 'odd'))) {
//     switch(type) {
//       case 'even':
//         return data.filter(item => item % 2 === 0);
//       case 'odd':
//         return data.filter(item => item % 2 === 1);
//     }
//   }
//   return `data - must be an array and type - must be an even or odd`
// }

// log(getNumberByParity(data, 'even'));
// log(getNumberByParity(data, 'odd'));
// log(getNumberByParity(data, ''));
// log(getNumberByParity(1, ''));
// log(getNumberByParity('', 'odd'));

// let user = {
//   name: "Джон",
//   hi() { log(this.name); },
//   bye() { log("Пока"); }
// };

// user.hi(); // Джон (простой вызов метода работает хорошо)
// let a = 1;
// let b = 2;
// // теперь давайте попробуем вызывать user.hi или user.bye
// // в зависимости от имени пользователя user.name
// (user.name == "Джон" ? this.name : user.bye)(); // Ошибка!

// let user = {
//   name: "Джон",
//   hi() { log(this.name); }
// };

// // разделим получение метода объекта и его вызов в разных строках
// let hi = user.hi;
// hi(); // Ошибка, потому что значением this является undefined

// let dog = { name: 'Sharik' };

// dog.hi = hi;

// dog.hi();
// let obj, method, dog;

// obj = {
//   name: '1',
//   go: function() { log(obj.name); }
// };

// obj.go();               // (1) [object Object]

// (obj.go)();             // (2) [object Object]

// (method = obj.go)();    // (3) undefined

// (obj.go || obj.stop)(); // (4) undefined

// dog = { name: 2 }
// dog.gav = method;
// dog.gav();

// function sumTo(n) {
//   let sum = 0;
//   for (let i = 0; i <= n; i++) {
//     sum += (n - i);
//   }
//   return sum;
// }
// function sumTo(n) {
//   return n == 1 ? 1 : n + sumTo(n - 1);
// }
// function sumTo(n) {
//   return n * (n + 1) / 2;
// }
// log(sumTo(10));


// function makeArmy() {
//     let shooters = [];
  
//     let i = 0;
//     while (i < 10) {
//       let x = i;
//       let shooter = function() { // функция shooter
//         log( x ); // должна выводить порядковый номер
//       };
//       shooters.push(shooter);
//       i++;
//     }
  
//     return shooters;
//   }
  
//   let army = makeArmy();
  
//   army[0](); // у 0-го стрелка будет номер 10
//   army[5](); // и у 5-го стрелка тоже будет номер 10
//   // ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...

// function sequenceSum(begin, end) {
//   return begin < end 
//   ? begin + sequenceSum(begin + 1, end) 
//   : begin === end 
//     ? begin 
//     : NaN;
// }

//1 + 2 + 3 + 4 + 5
// log(sequenceSum(1, 5));

// function getStringCount() {

// }

// let company = { // тот же самый объект, сжатый для краткости
//   sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
//   development: {
//     sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
//     internals: [{name: 'Jack', salary: 1300}]
//   }
// };

// // Функция для подсчёта суммы зарплат
// function sumSalaries(department) {
//   if (Array.isArray(department)) { // случай (1)
//     return department.reduce((prev, current) => prev + current.salary, 0); // сумма элементов массива
//   } else { // случай (2)
//     let sum = 0;
//     for (let subdep of Object.values(department)) {
//       sum += sumSalaries(subdep); // рекурсивно вызывается для подотделов, суммируя результаты
//     }
//     return sum;
//   }
// }

// log(sumSalaries(company)); // 6700

// let b = 3;

// function hey() {
//   b = 5;
//   var b = 6;
// }

// hey();
// log(b);

// class User {
//     constructor(options) {
//         this.name = options.name;
//     }

//     myCall(obj, ...args) {
//         return `${obj.name} ${args.join(' ')}`; //
//     }

//     myApply(obj, arr) {
//         return `${obj.name} ${arr.join(' ')}`;
//     }

//     myBind(func, obj, ...rest) {
//         return function(...args) {
//             return func(obj, ...rest.concat(args));
//         }
//     }
// }

// let user = new User({
//     name: 'John',
// })


// log(user.myCall(user, 'Doe', 34));
// log(user.myApply(user, ['Doe', 34]));
// log(user.myBind(user.myCall, user)('Doe', 34));

// function getFullName(lastName, age) {
//   return `${this.name} ${lastName} ${age}`;
// }

// function bindThroughCall(func, obj, ...rest) {
//     return func.call(obj, ...rest);
// }

// function bindThroughApply(func, obj, ...rest) {
//     return function(...args) {
//         return func.apply(obj, rest.concat(args));
//     }
// }

// log(bindThroughCall(getFullName, user, 'Doe', 34));
// log(getFullName.bind(user)('Doe', 34));
// log(bindThroughApply(getFullName, user)('Doe', 34));


// let user = {};

// Object.defineProperty(user, "name", {
//   value: "John",
//   configurable: true
// });

// let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

// log( JSON.stringify(descriptor, null, 2 ) );

// let animal = {
//   walk() {
//     if (!this.isSleeping) {
//       log(`I walk`);
//     }
//   },
//   sleep() {
//     this.isSleeping = false;
//   }
// };

// let rabbit = {
//   isSleeping: true,
//   name: "White Rabbit",
// };

// Object.setPrototypeOf(rabbit, animal)
// log(rabbit.isSleeping);

// // модифицирует rabbit.isSleeping
// rabbit.sleep();

// rabbit.walk();
// log(rabbit);

// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit();
// delete Rabbit.prototype.eats;

// log( rabbit.eats ); // true

// function User(name) {
//   this.name = name;
// }

// let user = new User('John');
// let user2 = new user.constructor('Pete');

// log( user2.name );

// function Rabbit(name) {
//   this.name = name;
// }
// Rabbit.prototype.sayHi = function() {
//   log(this.name);
// };

// let rabbit = new Rabbit("Rabbit");

// rabbit.sayHi();
// Rabbit.prototype.sayHi();
// Object.getPrototypeOf(rabbit).sayHi();
// rabbit.__proto__.sayHi();

// let user = {
//   name: "John",
//   surname: "Smith",

//   set fullName(value) {
//     [this.name, this.surname] = value.split(" ");
//   },

//   fullName() {
//     return `${this.name} ${this.surname}`;
//   }
// };

// let admin = {
//   __proto__: user,
//   isAdmin: true
// };

// log(admin.fullName); // John Smith (*)

// // срабатывает сеттер!
// admin.fullName = "Alice Cooper";
// log(admin.fullName);

// function delay(ms) {
//     return new Promise(resolve => {
//         setTimeout(() => resolve("result"), ms)
//     })
// }
  
// delay(3000).then(() => log('выполнилось через 3 секунды'));

// function showCircle(cx, cy, radius) {
//     let div = document.createElement('div');
//     div.style.width = 0;
//     div.style.height = 0;
//     div.style.left = cx + 'px';
//     div.style.top = cy + 'px';
//     div.className = 'circle';
//     document.body.append(div);

//     return new Promise(resolve => {
//       setTimeout(() => {
//         div.style.width = radius * 2 + 'px';
//         div.style.height = radius * 2 + 'px';

//         div.addEventListener('transitionend', function handler() {
//           div.removeEventListener('transitionend', handler);
//           resolve(div);
//         });
//       }, 0);
//     })
// }

// let promise = new Promise(function(resolve, reject) {
//   setTimeout(() => resolve(1), 1000);
// });

// promise.then(function(result) {
//   return log(result * 2);
// });

// promise.then(function(result) {
//   return log(result * 2);
// });

// promise.then(function(result) {
//   return log(result * 2);
// });

// new Promise(function(resolve, reject) {

//   setTimeout(() => resolve(1), 1000); // (*)

// }).then(function(result) { // (**)
//   log(result);
//   return result * 2;

// }).then(function(result) { // (***)
//   log(result);
//   return result * 2;

// }).then(function(result) {
//   return log(result);

// });

// log(1);

// setTimeout(function() {
//     log('timeout 0');
// }, 0);

// log(2);

// new Promise(function(resolve, reject) {
//   setTimeout(() => resolve(log('Promise 1')), 0);
// })
// .then(() => log('then 2'))
// .then(() => log('then 3'))
// .then(() => log('then 4'))

// log(3);
// log(4);
// log(5);

/*--------------Call/Apply/Bind----
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

-------------*/

class Humidifier {
  constructor(options) {
    this.model = options.model
    this.color = options.color
    this._maxWaterAmount = options.maxWaterAmount
  }
  _maxIntensity = 100;
  _maxWaterAmount = 0;
  _waterAmount = 0;
  _power = false;
  _isOn = false;
  _isOff = true;
  _intensity = 0;
  
  setPower() {
    if (!this._power) {
      this._power = true;
      return log(`Питание подано`);
    }
    this._power = false;
    return log(`Питание отключено`);
  }

  notifyAboutMinWaterAmount() {
    if (this._waterAmount <= 200) return log(`Пожалуйста добавьте воду`)
  }

  setOn() {
    if (!this._power) return log(`Подключите увлажнитель к питанию`);
    this._isOn = true;
    this._isOff = false;
    this._intensity = 1;
    return log(`Увлажнитель включён, установлен режим влажности ${this._intensity}%`);
  }

  setOff() {
    if (this._isOff) {
      return log(`Увлажнитель уже выключен`);
    }
    this._isOff = true;
    this._isOn = false;
    return log(`Увлажнитель выключен`);
  }

  get waterAmount() {
    return log(`В баке ${this._waterAmount}мл воды`);
  }

  set waterAmount(value) {
    if (value === this._maxWaterAmount) {
      this._waterAmount = value;
      return log(`В баке максимум воды, ${value}мл`);
    } else if (value > this._maxWaterAmount) {
      this._waterAmount = 5000;
      return log(`Воды слишком много`);
    }
    this._waterAmount = value
    this.notifyAboutMinWaterAmount();
    return this._waterAmount;
  }

  get intensity() {
    return log(`Установлен режим ${this._intensity}% влажности`);
  }

  set intensity(value) {
    if (value >= this._maxIntensity) {
      this._intensity = this._maxIntensity;
      return log(`Установлена максимальная интенсивность, режим ${this._intensity}% влажности`);
    } else if (value <= 1) {
      this._intensity = 1;
      return log(`Установлена минимальная интенсивность, влажность ${this._intensity}%`);
    }
    this._intensity = value;
    return log(`Установлен режим ${value}% влажности`);
  }

  moistening(waterAmount, intensity, timeInSeconds) {
    this._waterAmount = waterAmount;
    this._intensity = intensity;
    let startTime = 0;
    let finishTime = timeInSeconds * 1000;
    log(`В баке ${this._waterAmount}мл воды, установлен режим ${this._intensity}% влажности, на ${timeInSeconds} секунд`)
    
    let timerId = setInterval(function() {
      waterAmount = waterAmount - (intensity / 2);
      if (finishTime == startTime) {
        this._waterAmount = waterAmount;
        log(`Осталось ${this._waterAmount}мл Воды`);
        clearInterval(timerId);
      }
      finishTime -= 1000;
    }, 1000);
  }
}

const someHumidifier = new Humidifier({model: 'model', color: 'color', maxWaterAmount: 5000});
someHumidifier.setPower();
someHumidifier.setOn();
someHumidifier.moistening(4000, 50, 10);
const log = console.log;

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
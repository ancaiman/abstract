Eval: выполнение строки кода

``js
let value = eval('1+1');
alert(value); // 2``

``js
let f = new Function('a', 'alert(a)');
f(5); // 5``
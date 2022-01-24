Каррирование – это трансформация функций таким образом, чтобы они принимали аргументы не как ``f(a, b, c)``, а как ``f(a)(b)(c)``.

```js
function curry(f) { // curry(f) выполняет каррирование
  return function(a) {
    return function(b) {
      return f(a, b);
    };
  };
}

// использование
function sum(a, b) {
  return a + b;
}

let curriedSum = curry(sum);

alert( curriedSum(1)(2) ); // 3
```
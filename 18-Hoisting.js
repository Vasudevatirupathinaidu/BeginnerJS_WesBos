// Hoisting

// example-1
console.log(age);
var age = 10;

// example-2
sayHi();

function sayHi() {
  console.log('hello!');
}

// example-3

function cal() {
  console.log(add(10, 2));
}

function add(a, b) {
  return a + b;
}

cal();

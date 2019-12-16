// Closures - A closure is the ability to access a parent level scope from a child scope even after the parent function has been terminated.
// function outer() {
//   const outerVar = 'Hey i am the outer var';
//   function inner() {
//     const innerVar = 'Hey i am an inner var';
//     console.log(innerVar);
//     console.log(outerVar);
//   }
//   return inner;
// }
// const innerFn = outer();
// innerFn();

// function createGreeting(greeting = '') {
//   const myGreet = greeting.toUpperCase();
//   return function(name) {
//     return `${myGreet} ${name}`;
//   };
// }

// const sayHello = createGreeting('hello');
// const sayHey = createGreeting('hey');
// console.log(sayHello('deva'));
// console.log(sayHello('kit'));
// console.log(sayHey('kat'));

// function createGame(gameName) {
//   let score = 0;
//   return function win() {
//     score++;
//     return `Your name ${gameName} score is ${score}`;
//   };
// }

// const hockeyGame = createGame('Hockey');
// const soccerGame = createGame('Soccer');

// My example
// case-1
// function add(name) {
//   const a = 35;
//   const b = 40;
//   return function() {
//     return `${name} scored ${a + b}`;
//   };
// }

// const total = add('deva');
// console.log(total());

// case-2
function add() {
  const a = 35;
  const b = 40;
  return function(name) {
    return `${name} scored ${a + b}`;
  };
}

const total = add();
console.log(total('deva'));

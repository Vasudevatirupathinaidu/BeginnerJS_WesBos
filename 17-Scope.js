// Scope - Where are my variables and functions available to me?
console.log('Scope');

// Global variable
const first = 'deva'; //window.first = undefined --> because it is not attached to window. But it is globally scoped.

let second = 'vasu'; //window.first = undefined --> because it is not attached to window. But it is globally scoped.

var a = 100; //window.a = 100 --> it is attached to window and globally scoped.

// function sayHi() {
//   console.log('Hi!');
// }
// sayHi();

// const age = 100;
// function go() {
//   const myAge = 200;
//   const hair = 'blonde'; // local scope(functional scope)
//   console.log(myAge);
//   console.log(age);
//   console.log(hair);
// }
// go();
// console.log(age);
// console.log(hair);

// ***************************************
// Block scope

// example-1
// if(1 === 1) {
//   let cool = true;
// }
// console.log(cool);


// example-2
// function isCool(name) {
//   if (name === 'deva') {
//     let cool = true; // using var causes no error
//   }
//   console.log(cool);
//   return cool;
// }
// isCool('deva');

// example-3
// function isCool(name) {
//   let lastName = 'bonu';
//   let cool;
//   if (name === 'deva') {
//     cool = true;
//     console.log(lastName);
//   }
//   console.log(cool);
//   return cool;
// }
// isCool('deva');

// ***************************************
// const dog = 'snickers';

// function logDog() {
//   console.log(dog);
// }

// function go() {
//   const dog = 'sunny';
//   console.log(dog);
//   logDog();
// }
// go();

// ****************************************
// function scoping

// function sayHi(name) {
//   function yell() {
//     console.log(name.toUpperCase());
//   }
//   yell();
// }
// sayHi('vasudev');

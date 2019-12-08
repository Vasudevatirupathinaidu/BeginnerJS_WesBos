// function doctorize(firstName) {
//   return `Dr. ${firstName}`;
// }

// Anonymous function - A function without a name
// function(firstName) {
//   return `Dr. ${firstName}`;
// }

// function expression - is where you store a function as a value in a variable
// const doctorize = function(firstName) {
//   return `Dr. ${firstName}`;
// };

// Arrow functions - these functions are all about being concise
// example-1
// function inchToCM(inches) {
//   const result = inches * 2.54;
//   return result;
// }
// const inchToCM = inches => inches * 2.54;

// example-2
// function add(a, b = 3) {
//   const total = a + b;
//   return total;
// }
// const add = (a, b = 3) => a + b;

// example-3
// function makeABaby(first, last) {
//   const baby = {
//     name: `${first} ${last}`,
//     age: 0,
//   };
//   return baby.name;
// }
// const makeABaby = (first, last) =>
//   ({
//     name: `${first} ${last}`,
//     age: 0,
//   }.name);

// IIFE - Immediately invoked function expression

(function(age) {
  console.log('Running the anonymous function');
  return `You are Great and age ${age}`;
})(20);

// Methods - is simply a function that lives inside of an object
/*eslint-disable*/
const deva = {
  name: 'Vasudev',
  sayHi: function() {
    console.log('Hey Deva');
    return 'Hey Deva';
  },
  // short hand method
  yellHi() {
    console.log('Hey Deva!!!!!');
  },
  // Arrow function
  wisperHi: () => {
    console.log('Hi Deva!')
  },
}

// callback functions
// click callback
const button = document.querySelector('.clickMe');
// button.addEventListener('click', deva.yellHi);

// function handleClick() {
//   console.log('Great Clicking!!!');
// }
// button.addEventListener('click', handleClick);

button.addEventListener('click', function() {
  console.log('Nice Job!');
});

// Timer callback
setTimeout(function() {
  console.log('Done! Time to eat!');
}, 3000);
  // Arrow function
setTimeout(() => {
  console.log('Done! Time to eat!');
}, 3000);
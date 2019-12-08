const people = [
  { name: 'deva', cool: true, country: 'India' },
  { name: 'vasu', cool: true, country: 'USA' },
  { name: 'tiru', cool: false, country: 'AUS' },
];

people.forEach((person, index) => {
  console.log(person.name);
});

// ***********************************
// console methods

people.forEach((person, index) => {
  console.log(person.name);
  // info
  // console.info(person.name);

  // error
  // if (person.name === 'deva') {
  //   console.error('Good Name');
  // }

  // warn
  // if (person.name === 'deva') {
  //   console.warn('Good Name');
  // }

  // table
  // console.table(person);
});

// log-Outputting single object
const someObject = { log: 'single object' };
console.log(someObject.log);

// info- Outputting multiple objects
const name = 'naidu';
const someObj = { log: 'multiple objects' };
console.info('My name is ', name, '. The object is: ', someObj);

// group
function doALotofStuff() {
  // console.groupCollapsed('group');
  console.group('Doing some stuff');
  console.log('Hey there!');
  console.warn('Check out');
  console.error('Huh!');
  console.groupEnd('Doing some stuff');
}

people.forEach((person, index) => {
  console.group(`${person.name}`);
  console.log(person.country);
  console.log(person.cool);
  console.log('Done!');
  console.groupEnd(`${person.name}`);
});

// count- help you to found how many times is this function actually being run
function doctorize(name) {
  console.count(`running doctorize for ${name}`);
  return `Dr. ${name}`;
}

// ***************************************
// call stack, stack trace - it will tell you what function called

function greet(name) {
  doesntExist(); // Cause an error
  return `Hello ${name}`;
}

function go() {
  const name = doctorize(greet('deva'));
  console.log(name);
}

function bootstrap() {
  console.log('Starting the app!');
  go();
}
// bootstrap();

// **********************************
/* Grabbing elements - select any element on mdn webpage(example)-->select inspect-->goto console and type $0 --> the selected element will appear on console
1) $0 - here '0' means the last element clicked.
    $1 - here '1' means the second last element clicked.
2) $0.value
***shorthand version for element selector***
3) $('p') - This will select first paragraph
4) $$('p') - Select all of the paragraph tags on the page
  document.querySelectorAll('p');
*/

// ***********************************
// Breakpoints - debugger
people.forEach((person, index) => {
  // debugger; // Check Sources on developer tool
  console.log(person.name);
});

// ***********************************
// Network Requests

// ***********************************
// Break on attribute

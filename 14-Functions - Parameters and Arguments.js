// function definition
function calculateBill(billAmount, taxRate) {
  // this is the function body
  console.log('Running Calculate Bill!!');
  const total = billAmount * (1 + taxRate);
  return total;
}

// function call or run or invoke
const myTotal = calculateBill(100, 0.13);
const myTotal_2 = calculateBill(200, 0.13);

console.log(myTotal, myTotal_2);

// function definition
function sayHiTo(firstName) {
  return `Hello ${firstName}`;
}
const greeting = sayHiTo('Deva');
console.log(greeting);

function doctorize(name) {
  return `Dr.${name}`;
}

function yell(name) {
  return `HEY ${name.toUpperCase()}`;
}

console.log(yell(doctorize('Deva')));

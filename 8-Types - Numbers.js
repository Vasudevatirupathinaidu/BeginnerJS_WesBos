const age = 100.5;
const name = 'deva';
console.log(name);

console.log(typeof Infinity);
console.log(typeof -Infinity);
console.log(typeof NaN);

console.log(Math.round(28.4));
console.log(Math.round(28.8));
console.log(Math.floor(28.4));
console.log(Math.ceil(28.4));
console.log(Math.trunc(28.4));
console.log(Math.random() * 100);

const smarties = 20;
const kids = 3;

const eachKidsGets = Math.floor(smarties / kids);

console.log(`Each kids gets ${eachKidsGets}`);

const dadGets = smarties % kids;
console.log(dadGets);

// type on console - 0.1 + 0.2 = 0.30000000000000004
// window.location = `https://${0.1 + 0.2}.com`;

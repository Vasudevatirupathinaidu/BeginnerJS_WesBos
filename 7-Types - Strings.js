/* eslint-disable */ //this will disable eslint

const name = 'vasu';
const middle = "deva";
const last = `bonu`;


const sentence = 'she\'s so beautiful'; //escaping

console.log(sentence);

const song = `ohh

ya

i like 

pizza`;

console.log(song);

/* interpolation-put a variable inside of a string*/

// const hello = 'hello my name is ' + name + '. Nice to meet you';
// console.log(hello);

/*template string*/
const hello = `hello my name is ${name}. Nice to meet you.`

console.log(hello);

const html = `
    <div>
        <h2>${name}</h2>
        <p>${hello}</p>
    </div>
`;



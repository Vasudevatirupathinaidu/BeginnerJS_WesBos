// **********The DOM - Selecting Elements*********

const p = document.querySelector('p');
const div = document.querySelectorAll('div');
console.log(p);
console.log(div);

const element = document.querySelector('body > div > div:nth-child(1) > p');
console.log(element);

const Item2 = document.querySelector('.item2');
console.log(Item2);
const Item2Img = Item2.querySelector('img');
console.log(Item2Img);

// **********The DOM - Element Properties and Methods********

const heading = document.querySelector('h2');
console.log(heading);
console.dir(heading); // dir will show object properties
console.log(heading.innerText);
console.log(heading.textContent);
// heading.textContent = 'deva is great';
// console.log(heading.textContent);

console.log(heading.innerHTML);
console.log(heading.outerHTML);

const pizzaList = document.querySelector('.pizza');

console.log(pizzaList.textContent);

// pizzaList.textContent += ' new pizza';

// console.log(pizzaList.textContent);

pizzaList.insertAdjacentText('afterend', ' new Pizza'); // afterbegin, beforeend, afterend

console.log(pizzaList.textContent);

// **********The DOM - Working with Classes********

const pic = document.querySelector('.nice');
console.log(pic.classList);
pic.classList.add('open');
pic.classList.remove('cool');
console.log(pic.classList);

function MakeItRound() {
  pic.classList.toggle('round');
  // pic.classList.contains('round');
}

pic.addEventListener('click', MakeItRound);

// **********The DOM - Build in and Custom Data Attributes********

pic.alt = 'Cute Pup'; // setter
// pic.width = 200;
console.log(pic.alt); // getter
console.log(pic.naturalWidth); // getter , naturalWidth will be shown as '0' because image loading can take some time. We can solve this problem by adding 'load' event listener to Window object or to individual pic like mentioned below.

// Whole page
// window.addEventListener('load', function() {
//   console.log(pic.naturalWidth); // getter
// });

// Individual pic
// pic.addEventListener('load', function() {
//   console.log(pic.naturalWidth); // getter
// });

// getAttribute
console.log(pic.getAttribute('alt'));

// setAttribute
pic.setAttribute('alt', 'Really Cute Pup');
console.log(pic.getAttribute('alt'));

// dataset
const custom = document.querySelector('.custom');
console.log(custom.dataset);

custom.addEventListener('click', function() {
  alert(`Welcome ${custom.dataset.name} ${custom.dataset.last}`);
});

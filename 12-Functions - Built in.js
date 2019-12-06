// Math.max() is a function ----> Math is an object, max is a method, 10 & 20 are arguments.

Math.max(10, 20);

console.log(Math.max(10, 20));

console.log(parseFloat(23.45));

console.log(parseFloat('23.45')); // coercion

console.log(parseInt('23.45')); // coercion

console.log(Date.now()); // Result can cross check with epoch time converter

console.log(window.navigator.vibrate(200)); // The Navigator.vibrate() method pulses the vibration hardware on the device, if such hardware exists.

console.log(
  window.scrollTo({
    top: 100,
    bottom: 100,
    behavior: 'smooth',
  })
);

// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

function toPounds(penceString) {
  const pence = Number(penceString.slice(0, -1));
  return `£${(pence / 100).toFixed(2)}`;
}
console.log(toPounds("100p")); // should return £1.00
console.log(toPounds("399p")); // should return £3.99
console.log(toPounds("10p")); // should return £0.10

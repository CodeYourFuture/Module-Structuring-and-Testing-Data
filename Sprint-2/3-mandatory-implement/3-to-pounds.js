// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

function toPounds(penceString) {
  const penceNumber = Number(penceString.slice(0, -1));
  return "£" + (penceNumber / 100).toFixed(2);
}

console.log(toPounds("399p"));
console.log(toPounds("250p"));
console.log(toPounds("100p"));

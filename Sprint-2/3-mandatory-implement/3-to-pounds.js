// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

function toPounds(penceString) {
  penceString = penceString.endsWith("p")
    ? penceString.slice(0, -1)
    : penceString;

  const paddedString = penceString.padStart(3, "0");

  const pounds = paddedString.slice(0, -2);

  const pence = paddedString.slice(paddedString.length - 2);

  return `£${pounds}.${pence}`;
}

// Example calls
console.log(toPounds("399p"));
console.log(toPounds("5p"));
console.log(toPounds("123"));
console.log(toPounds("4567"));

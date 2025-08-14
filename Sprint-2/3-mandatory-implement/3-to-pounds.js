// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

function toPounds(penceString) {
  const noP = penceString.slice(0, -1);
  const padded = noP.padStart(3, "0");
  const pounds = padded.slice(0, -2);
  const pence = padded.slice(-2).padEnd(2, "0");
  return `£${pounds}.${pence}`;
}
console.log(toPounds("5p")); // £0.05
console.log(toPounds("70p")); // £0.70
console.log(toPounds("399p")); // £3.99
console.log(toPounds("1000p")); // £10.00

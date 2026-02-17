// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

function toPounds(penceAmount) {
  const padded = penceAmount.padStart(3, "0");
  const pounds = padded.substring(0, padded.length - 2);
  const pence = padded.substring(padded.length - 2);
  return `£${pounds}.${pence}p`;
}

console.log(toPounds("399"));

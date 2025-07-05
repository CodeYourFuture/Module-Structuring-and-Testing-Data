// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.
// You should call this function a number of times to check it works for different inputs

function toPounds(penceString) {
  // Remove the trailing "p"
  const penceStringWithoutTrailingP = penceString.slice(0, -1);

  // Pad the string so it's at least 3 digits
  const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");

  // Extract pounds and pence
  const pounds = paddedPenceNumberString.slice(0, -2);
  const pence = paddedPenceNumberString.slice(-2).padEnd(2, "0");

  return `£${pounds}.${pence}`;
}

// Test cases
console.log(toPounds("399p")); // £3.99
console.log(toPounds("99p"));  // £0.99
console.log(toPounds("9p"));   // £0.09
console.log(toPounds("1234p")); // £12.34
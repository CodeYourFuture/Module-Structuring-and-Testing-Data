// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs
function toPounds(penceString) {
  // takes the p from the end of the string
  const penceStringWithoutTrailingP = penceString.substring(
    0,
    penceString.length - 1
  );

  // the number must have at least 3 digits
  // 8 becomes 008
  const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");

  // Get everything except the last 2 digits for pounds
  const pounds = paddedPenceNumberString.substring(
    0,
    paddedPenceNumberString.length - 2
  );

  // Get the last 2 digits for pence
  const pence = paddedPenceNumberString
    .substring(paddedPenceNumberString.length - 2)
    .padEnd(2, "0");

  // Return the result in pounds format
  return `£${pounds}.${pence}`;
}

console.log(toPounds("399p")); // £3.99
console.log(toPounds("45p")); // £0.45
console.log(toPounds("8p")); // £0.08
console.log(toPounds("1234p")); // £12.34

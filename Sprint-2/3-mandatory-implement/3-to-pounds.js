// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs
// This program takes a string representing a price in pence.
// The program then builds up a string representing the price in pounds.

// 1. Initialise a string variable with the value "399p"
const penceString = "399p";

// 2. Remove the trailing "p" from the string
const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

// 3. Make sure the pence value has at least 3 digits
const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");

// 4. Get the pounds part by removing the last two digits
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);

// 5. Get the pence part (the last two digits)
const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

// 6. Display the final price
console.log(`£${pounds}.${pence}`);
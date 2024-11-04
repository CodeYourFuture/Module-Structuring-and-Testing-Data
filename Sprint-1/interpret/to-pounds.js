const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);
// Removing the "p" in the end

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
console.log(paddedPenceNumberString);
// This code makes sure the number has at least 3 digits by adding zeros at the start

const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);
// This code takes everything except the last two digits

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");
//  This code takes the last two numbers for pence and makes sure it has 2 digits

console.log(`£${pounds}.${pence}`);
// This code shows the price by using a template literal, adding a £ sign in front, and add pounds with pence.


// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step


// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"
// 2. const penceStringWithoutTrailingP = penceString.substring(
//   0,
//   penceString.length - 1
// );
// Removing the "p" in the end

// 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
// console.log(paddedPenceNumberString);
// This code makes sure the number has at least 3 digits by adding zeros at the start.

// 4. const pounds = paddedPenceNumberString.substring(
//   0,
//   paddedPenceNumberString.length - 2
// );
// This code takes everything except the last two digits

// 5. const pence = paddedPenceNumberString
//   .substring(paddedPenceNumberString.length - 2)
//   .padEnd(2, "0");
//  This code takes the last two numbers for pence and makes sure it has 2 digits

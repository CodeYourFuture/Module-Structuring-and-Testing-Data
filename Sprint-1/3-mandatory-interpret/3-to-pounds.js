const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"
// 2. const penceStringWithoutTrailingP = penceString.substring(0,penceString.length - 1) : removes the "p" from 
//    the string "399p", now is "399"
// 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"): variable which adds padding of 
//    "0" to make sure that a string has at least 3 digits .
// 4. const pounds = paddedPenceNumberString.substring(0,paddedPenceNumberString.length - 2) : variable pounds 
//    removes the last 2 digits, everything before becomes pounds.
// 5. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0") : variable
//    pence takes the last 2 digits as pence also adds padding to ensure there are at least 2 digits.
// 6. console.log : built-in JavaScript function that prints messages or values to the browser’s console
// 7. `£${pounds}.${pence}` creates a formatted string (£3.99).
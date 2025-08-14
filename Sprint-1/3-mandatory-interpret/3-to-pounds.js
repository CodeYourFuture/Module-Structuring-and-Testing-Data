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
// 2. const penceStringWithoutTrailingP = penceString.substring(0,penceString.length - 1); removes the last character from the string
// const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"); this will add zeros at the beginning of the string to
// make sure its 3 characters long
// 3. const pounds = paddedPenceNumberString.substring(0,paddedPenceNumberString.length - 2); this will remove the last 2 digits
// from the string to come up with the pound value
// 4. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0"); this will extract the last two
// characters of the string and adds a zero if it is less than 2 characters long

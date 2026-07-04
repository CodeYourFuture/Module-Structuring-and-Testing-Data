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
// Uses substring() to create a new string without the las character. length-1 finds the position before the final "p", so the result is "399". Thats mean its removing the "p" and leave only numeric value.
// Uses padStart(3,"0") to ensure the string has at least 3 characters by adding zeros at the beginning if needed. In our example the string has already 3 characters ("399") so it does not change.
// Use substring() to extract the pounds by taking all characters expect the last two digit.
// Use substring()  to extract the last two characters as pence, and the use padEnd() to ensure the pence value always has two digits.
// Finally, using the console.log() to display the final price in pounds and pence format.
const penceString = "1399p";

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

// This program start with a string represents pence which is calculated and displayed in £X.XX in format.
// Line 3-6 is to remove the character p at the end of the string and store the remaining string in a variable penceStringWithoutTrailingP.

// Line 8-12 is to make sure the string taken in from the previous step has at least 3 characters. If it isn't, fill the start with '0' until it is 3 characters long.
// Then use this at least 3 characters length string to remove the last 2 characters and store the string as the string of pound.

// Line 14-19 is to make sure the string which is at least 3 characters long to get the last two characters and make sure it is 2 characters long. If it isn't, fill the end with '0' until it 2 characters long. And it is stored as pence.

// Line 18 displayed the string all together to show £x.xx in format.
// I tested the string works for longer string like 399999p.
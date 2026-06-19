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

// line 1 creating a string containing price in pence and this is starting value that programme will convert into pound.
// line 3 removing p from the end of 399p because p is not needed when converting into pound or pence.
// line 8 making sure string  has at least 3 digit by adding zero if needed and this makes easier to separate pound and pence consistently.
// line 9 extract everything except last two digit .
// line 14 extract last two digit and padEnd() ensures the pence part always has 2 digits.
// line 18 to print value for checking .

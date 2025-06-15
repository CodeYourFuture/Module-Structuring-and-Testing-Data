const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
); // deletes last character of penceString, removing the p char

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"); // initiate paddedPenceNumberString
// give it string of pence value with padded zero in front so that it is minimum 3 characters, e.g. 003

const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);
// declared var pounds by removing the last two digits from paddedPenceNumberString

const pence = paddedPenceNumberString.substring(
  paddedPenceNumberString.length - 2
);
//.padEnd(2, "0");
// syntax error? fixed.
// declared var pence by taking last two char of paadedPenceNumberString, and using padEnd to make sure it has 2 digits
// but not sure padEnd is neccessary because paddedPenceNumberString is already padded in line 8.

console.log(`£${pounds}.${pence}`); // displays penceString in £pounds.pence format, and pence has 2 digits.

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"
// see comments in above code.

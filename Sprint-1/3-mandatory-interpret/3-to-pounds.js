const penceString = "33399p";

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
// Line 1. const penceString = "399p": initialises a string variable with the value "399p"
//
// Line 3. variable "penceStringWithoutTrailingP" declared and assigned first three characters
// of "penceString" using the substring method, removing the trailing "p".
//
// Line 8 . variable "paddedPenceNumberString" declared and assigned the value of "penceStringWithoutTrailingP"
// padded to a minimum length of 3 characters with leading zeros using the padStart method. Which is clever way,
// really to replace it with zeros if number of pence is less than 3 characters long.
//
// Line 10 Variable "pounds" declared and assigned value of "paddedPenceNumberString" but without the last
// two characters.
//
// Line 15. Variable "pence" declared and assigned value of the last two characters of "paddedPenceNumberString"
// and padded to a minimum length of 2 characters with zeros at the end, padEnd method is used once again.
// it is to ensure that if the number of pence is less than 2 characters long, it will be padded with zeros
// at the end.
//
// Line 19. console.log is used to print final output.

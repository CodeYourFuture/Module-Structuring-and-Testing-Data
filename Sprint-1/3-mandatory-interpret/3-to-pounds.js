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

/* To begin, we can start with

1. const penceString = "399p": initialises a string variable with the value "399p"

2.const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

: Remove the trailing "p" using substring.
Gives us only the numeric part.

3.const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");

: We make sure the string is at least 3 characters long by padding with 0s at the start
.This helps us separate pounds and pence safely.

4.const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);

Extract the pound part (everything except the last 2 characters)

5.const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");
  Extract the pence part (last 2 characters), and make sure it's 2 digits long

6.console.log(`£${pounds}.${pence}`);
 Display the final formatted price in pounds and pence

*/


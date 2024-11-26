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
// 1. const penceString = "399p": initializes a string variable with the value "399p"

// to help me understand first i googled words  that are new to me. penceString means the variable is a string, substring means a portion of a string, withOutTrailing mean describing a variable  without a certain character, padded or pad means simply adding to a string.

// 2. const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1);, creates a new variable called penceStringWithoutTrailingP by removing the last character p, resulting in "399".

// 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");, pads the string penceStringWithoutTrailingP with a leading "0" if it is less than 3 characters long, making it at least 3 characters. here "399" is three characters so it remains unchanged.

// 4. const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2);, will create a variable called const pounds y taking the characters from the start of paddedPenceNumberString up to but not including the last two characters which will result in "3".

// 5. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");, will create a variable called const pence this line of code extracts the last two characters from a padded string representation of pence and ensures that it is represented as a two character string.

// 6. console.log(`£${pounds}.${pence}`);, will print the amount of money in pounds and pence using template literals and then it outputs that formatted string to the console.
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

// 2. const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1): 
//    2.1 removes the trailing 'p' from the string by taking a substring from index 0 to the second last character
//    2.2 penceStringWithoutTrailingP now = "399"

// 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"):
//    3.1 ensures the string has at least 3 characters by adding zeros to the start if necessary
//    3.2 However, since "399" already has 3 characters, it remains unchanged
//    3.3 paddedPenceNumberString now = "399"

// 4. const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2):
//    4.1 taking the first characters of the string up to the last two characters
//    4.2 since "399" has only 3 characters, this only takes the first character
//    4.3 pounds now = "3"

// 5. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0"):
//    5.1 takes the last two characters of the string to represent the pence
//    5.2 since "399" has only 3 characters, this takes the last two characters "99"
//    5.3 padEnd(2, "0") ensures that if there were less than 2 characters, it would add a "0" to the end
//    5.4 pence now = "99"

// 6. console.log(`£${pounds}.${pence}`):
//    6.1 constructs a formatted string representing the price in pounds and pence
//    6.2 prints "£3.99" to the console
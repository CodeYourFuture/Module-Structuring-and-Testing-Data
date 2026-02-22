const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1);

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

// 2. const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1); Here we use subString() to extracts everything except the last character.

// 3.const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");

// padStart(3, "0") ensures the string has at least 3 characters.
// If the string is shorter than 3, zeros ("0") are added at the beginning.
// If the string is already 3 or more characters, nothing changes.
// padStart() ensures the code works for all pence values, including 1-digit and 2-digit numbers.
// Without padStart(), the logic would only work correctly for numbers that already have 3 or more digits.

// 4.const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2);

// This line used extract the pound value 3 from the padded pence string 399 . 

// 5.const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");

//This line extracts the last two digits from paddedPenceNumberString by starting at length - 2 and going to the end. 
// Then padEnd(2, "0") ensures the pence value always has two digits.

// 6.console.log(`£${pounds}.${pence}`);

// Here we use console.log() to print our output and merge the pound value and pence value and add pound symbol using template literals.

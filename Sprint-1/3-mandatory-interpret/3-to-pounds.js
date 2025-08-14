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
// 3. Initialises a new variable penceStringWithoutTrailingP with the value of penceString without the last character (the 'p')
// 8. Intitialises a new variable paddedPenceNumberString with the value of penceStringWithoutTrailingP, 
// padded to ensure it has at least 3 characters, adding leading zeros if necessary.
// 9. Initialises a new variable "pounds" with the first part of paddedPenceNumberString, which represents the pounds part of the price.
// 14. Initialises a new variable "pence" with the last two characters of paddedPenceNumberString, 
// which represents the pence part of the price,
// padded to ensure it has at least 2 characters, adding trailing zeros if necessary.
// 18. Finally, the program logs the formatted price in pounds and pence to the console.
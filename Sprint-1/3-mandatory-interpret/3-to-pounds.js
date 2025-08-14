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
// 2. const penceStringWithoutTrailingP = penceString.substring( 0, penceString.length - 1); : removing p from the number 399
// 3. const paddedPenceNumberString : we are checking if the number has min 3 digits, if less than we will add "0" in the start. 
// 4. paddedPenceNumberString.length - 2 : calculates the position 2 characters from the end.
// 5..substring(paddedPenceNumberString.length - 2 : extracts the last 2 characters. 
// 6. .padEnd(2, "0") : if our new number (paddedPenceNumberString.length) will have less then 2 digits we will add extra 0. 
// 7. console.log(`£${pounds}.${pence}`) : the result where we will add pounds and pence together. 

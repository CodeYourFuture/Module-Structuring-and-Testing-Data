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
// 3. const penceStringWithoutTrailingP = penceString.substring(0, penceString.length -1);
// creates a new string that removes the last character ("p") from penceString, leaving just the number part
// 8. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
// Adds zero to the start of thr string if it's shorter than three digits, ensuring values like "9" become "009"
// 14. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length -2)
//.padEnd(2, "0") - Takes the last two digits as the pence portion of the price and adds a zero if it's missing a digit
// 18. console.log(`£${pounds}.${pence}`) - Displays the formatted price in pounds and pence, such as £3.99
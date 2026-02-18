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
// 2. penceString.length gives the length of "399p" -> 4, length -1 = 3, substring(0,3) takes characters from idex 0 up to (but not including) index 3
// 3. padStart(3, "0") ensures the string is at least 3 characters long.
// 4. const pounds = paddedPenceNumberString.substring(
// 0,
//  paddedPenceNumberString.length - 2
// );
// What this does: it takes everything except the last 2 digits. Because: The last 2 digits represent pence and everything before that represents pounds.
// 5.  substring(length - 2) --> takes the last 2 digits, .padEnd(2, "0") ensures it is always 2 digits.
// 6. console.log() --> builds a formatted currency string £3.99

// This program is doing overall, removing the "p", 
// ensuring there are at least 3 digits, 
// splitting the number into pounds and pence,
// finally formatting it into a proper currency format.
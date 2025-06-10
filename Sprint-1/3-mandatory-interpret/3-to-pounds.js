const penceString = "99p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);
console.log(penceStringWithoutTrailingP);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
console.log(paddedPenceNumberString);
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);
console.log(pounds);
const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

console.log(pence);
console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"
/* 2. in penceStringWithoutTrailingP assignment, last character of penceString which is 'p' is removed
   3. in paddedPenceNumberString assignment, the value completed to 3 digit if the length is shorter than three digit
   4. in pounds assignment, pennies part of penceString is removed.
   5. in pence assignment, pounds part of penceString is removed and it is completed one digit if the length is shorter than three digit
   6. in console.log function, pounds and pence are concatenated and converted price format

*/

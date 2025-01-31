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
//2.Removing the "p" at the end of the string.
//3. Making sure the number has 3 digits. Ensures that the pence amount always has at least three digits.
//4.Getting the pounds part. It takes the part before the last 2 digits.
//5.Getting the pence part. It takes the last 2 digits and ensures there are 2 digits (adding a zero if necessary).
//6.Showing the result in pounds and pence format.

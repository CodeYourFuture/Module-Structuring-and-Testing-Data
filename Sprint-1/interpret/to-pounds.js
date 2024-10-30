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
// const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1);
// 2. initialises penceStringWithoutTrailingP, penceString.substring(0, penceString.length - 1); take the values from the first character to the second last character removing the "p".
// const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
// 3. initialises paddedPenceNumberString, penceStringWithoutTrailingP.padStart(3, "0"); pads 0 in front of the number if there are less than 3 digits until there are 3 number digits.
// const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2);
// 4. initilises pounds, paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2); takes paddedPence NumberString and only takes the first digit.
// const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");
// 5. initialises pence, paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0"); takes paddedPenceNumberString and only takes the last 2 digits, pad 0 at the end if necessary.
// console.log(`£${pounds}.${pence}`);
// 6. prints and formats pounds and pence together displaying £3.99

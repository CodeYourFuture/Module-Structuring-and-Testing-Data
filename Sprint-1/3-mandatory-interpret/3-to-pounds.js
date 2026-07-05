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
// [ChunYanWong] line 3 is used to remove the character "p" or the unit penny
// [ChunYanWong] line 8 is used to add three 0 in front of the variable penceStringWithoutTrailingP
// [ChunYanWong] line 9 is used to get the nearest pound from the variable above
// [ChunYanWong] line 14 is used to get the remaining penny after converting to the nearest pound
// [ChunYanWong] line 18 is used to display the result in pound and penny respectively

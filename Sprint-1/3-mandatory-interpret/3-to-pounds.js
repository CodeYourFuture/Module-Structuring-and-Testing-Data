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
//For line 3 and 5 (const penceStringWithoutTrailingP = penceString.substring 0, penceString.length - 1)= substring(start, end) extracts part of a string.

//0 means start at the beginning.

//penceString.length - 1 means stop before the last character.

//For "399p":

//length = 4

//4 - 1 = 3

//substring from 0 to 3 → "399"

// The purpose is to;

//Removes the "p" at the end of the string.

//Leaves only the numeric value "399"

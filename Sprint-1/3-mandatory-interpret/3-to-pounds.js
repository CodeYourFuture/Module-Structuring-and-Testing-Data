const penceString = "399p";//initialises a string variable with the value "399p"

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);// removes the last element from the string using subString().

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");// returns 399 because the targetLength 3 is equivalent to the length of the string. So no "0" padding will be added.
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);//removing the last 2 digit of 399

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");// This returns 99 given that the padding starts at end and it's length is 2.

console.log(`£${pounds}.${pence}`);//This string interpolation logs the value of pound and pence and the output becomes £3.99

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"

const penceString = "399p";
 //initialises a string variable with the value "399p"

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);
// declare a new var and assign penceString value without last character (p)/

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
//declare a new variable and Make sure it is at least 3 digits long eg: 1 become 001.

const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);
//declare a new variable and assign the paddedPenceNumberString value without last two digit.

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");
// pence= take the pound length and remove it and keep all rest digit and if the shorter than 2 digit add 0 until paddedPenceNumberString
//  .substring(paddedPenceNumberString.length - 2) becomes 2 digits
console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"

// variable declaration; assignment of value 399p to penceString variable
const penceString = "399p"; 
// variable declaration; the expression takes the p out of penceString and outputs 399
const penceStringWithoutTrailingP = penceString.substring( 
  0,
  penceString.length - 1
);
//variable declaration; the expression adds 0 to the start of the penceStringWithoutTrailingP if it has less than 3 characters
const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
//variable declaration; the expression takes out 99 from paddedPenceNumberString and outputs 3
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);
//variable declaration; the expression takes out 3 from paddedPenceNumberString, then adds 0 to the end of if its characters are less than 2
const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0"); //output:99

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"

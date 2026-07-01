const penceString = "399p";
//initializes a string variable with the value "399p"

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);
//initializes a string variable by taking a substring of penceString up until the part where the p is, so without the p
const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
//it initializes a string variable by padding the start of the pencestringwithoutrailing with 0 if the length is less than 3
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);
//it initializes a string variable by taking all the strings except from the last two letters

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");
  //initializes a string variable by taking a substring from paddedpencenumberstring except from the last two letters and padding the end wih 0, if it is less than 2

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initializes a string variable with the value "399p"
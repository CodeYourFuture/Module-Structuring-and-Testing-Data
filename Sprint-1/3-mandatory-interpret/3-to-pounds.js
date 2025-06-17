const penceString = "39p";

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
// 2.const penceStringWithoutTrailingP = penceString.substring( 0,penceString.length - 1); Removes the trailing "p" character 
// 3.const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"); adds  characters to the beginning  of string till it reaches the length 
// 4.const pounds = paddedPenceNumberString.substring(0,paddedPenceNumberString.length - 2); Extracts the pounds part  except the last two 
//5. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");  Extracts the last two digits and ensure t's always two digits long
// 6.Format into £0.00

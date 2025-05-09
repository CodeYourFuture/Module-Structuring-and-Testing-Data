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

console.log (`The result is ${paddedPenceNumberString}`);

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
// 2. const penceStringWithoutTrailingP = penceString.substring(0,penceString.length - 1) : removing p by using substring method.
// 3.const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"); : adding 0 to the start from the left side in case of penstring have 2 numbers only 
// 4. const pounds = paddedPenceNumberString.substring(0,paddedPenceNumberString.length - 2); : getting the first letter from the string 
// 5. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0"); // get the last two letter and add zero in case if there is only one letter. 

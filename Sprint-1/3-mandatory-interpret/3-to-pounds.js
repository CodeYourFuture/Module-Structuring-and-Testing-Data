const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
const pounds = paddedPenceNumberString.substring(0,paddedPenceNumberString.length - 2);

const pence = paddedPenceNumberString .substring(paddedPenceNumberString.length - 2).padEnd(2, "0");

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"
// 2. const penceStringWithoutTrailingP = penceString.substring(0,penceString.length - 1);: used to strip off the last substring character 'p'
// 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"): Used to add '0' to the start of the string if the string
// length is less than 3, else if string length is 3 it does not pad.
// 4.const pounds = paddedPenceNumberString.substring(0,paddedPenceNumberString.length - 2);: This expression copy the first character 
// from every length character of the padded string
// 5.const pence = paddedPenceNumberString .substring(paddedPenceNumberString.length - 2).padEnd(2, "0");: This expression add '0' to the end if the paddedString is not 
// upto 2 characters
// 6.  this line is a function call to log the argument inside it to the console. it use template literals to get the values of the variables


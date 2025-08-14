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
// 2. const penceStringWithoutTrailingP = "399p".substring( 0,  penceString.length - 1): Here we use the subString method which will slide the string of 
// penceString starting at index 0 and ending at index 2 (3 - 1). The result should be "399"
// 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"): Here we want to make sure that the penceStringWithoutTrailingP variable has at least 3 characters, if that is not the case, we will add "0" infront of the character till it reaches the length required.
// Here, paddedPenceNumberString = "399" . Then pounds =  "3"
// 4. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0") : The substring(paddedPenceNumberString.length - 2) will return 99  and the padEnd(2,"0") will make sure that there are at least two characters here.



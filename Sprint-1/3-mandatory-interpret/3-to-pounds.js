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

// MARTIN ANSWERS BELOW
/*
 1. const penceString = "399p" - initialises a string variable with the value of "399p"
 2. const penceStringWithoutTrailingP = penceString.substring(0,penceString.length - 1) - removes the trailing p so that the value of penceStringWithoutTrailingP is "399"
 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0") pads the value to a minimum of 3 spaces, with 0 being added if the value is less than 3 characters. In this case holding there are 3 characters - "399". 
 4. const pounds = paddedPenceNumberString.substring(0,paddedPenceNumberString.length - 2); - uses the substring method to extract the first value from paddedPenceNumberString and assign it to the variable pounds.  In this case the first value is "3"
 5. const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");
  - this uses the substring method to extract the last 2 values in paddedPenceNumberString, followed immediately with the padEnd method which adds zeros if the number of characters is less than 2 spaces.  In this case, the value of "99" is assigned to the pence variable

 6. console.log(`£${pounds}.${pence}`) is a log of the variables pounds and pence in a formatted string which will print the value - "£3.99"
*/

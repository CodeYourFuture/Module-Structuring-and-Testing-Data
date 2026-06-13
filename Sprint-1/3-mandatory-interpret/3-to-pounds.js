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
const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);
// 2. const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1): 
// creates a new string variable that removes the last character "p" from the original string

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
// 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"): 
// pads the string with leading zeros to ensure it has at least 3 characters

const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);
// 4. const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2): 
// extracts the substring representing the pounds by taking all characters except the last two

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");
// 5. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0"): 
// extracts the last two characters representing the pence and pads it with trailing zeros if necessary

console.log(`£${pounds}.${pence}`);
// 6. console.log(`£${pounds}.${pence}`): outputs the final formatted price in pounds and pence to the console  



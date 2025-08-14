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
  

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"

// const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1); removes the trailing p from the penceString, so the value will be "399".

// const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"); pads the numeric string with zeros until it 3 digits character Long. value will be "399" and also ensuring consistency of 3 digits value.

// const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2); extracts the pounds part from the padded string by taking all but the last two digits.Here, it will be "3".

// const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");  extracts the last two characters as the pence portion and ensures it is always two digits.
// console.log(`£${pounds}.${pence}`); formats and prints the final price in pounds and pence format, hence it will output "£3.99" 

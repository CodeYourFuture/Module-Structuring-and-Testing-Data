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
// 2. const penceStringWithoutTrailingP = penceString.substring(0,penceString.length-1); Removes the p from the string. Result=399
// 3  const paddedPenceNumberString=penceStringWithoutTrailingP.padStart(3,"0"):This ensures that the pence value has at least three  digits. It can add three leading zeros if necessary
// 4. const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length-2); Extracts the pound part of rhe value.
// 5. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length-2).padEnd(2,"0"); Extracts the pence portion of the value
// 6. Computes out the final number in pounds and pence.

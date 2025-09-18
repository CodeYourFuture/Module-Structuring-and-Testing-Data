// 1. initialises a string variable with the value "399p"
const penceString = "399p";

// 2. removes the trailing 'p' character
const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

// 3. pads the numeric string with leading zeros so it is at least 3 digits
const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");

// 4. extracts the pound part by taking all but the last two digits
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);

// 5. extracts the pence part by taking the last two digits, and pads with trailing zeroes if needed
const pence = paddedPenceNumberString.substring(
  paddedPenceNumberString.length - 2
);

// 6. formats and prints the result as a pounds and pence string
console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"

const penceString = "399p";
// 1. const penceString = "399p": initialises a string variable with the value "399p"
const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);
//2. removes "P" from the string
const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
//3. Ensures the string is at least 3 characters long by adding 0 to the start
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);
//4. Extracts everything except the last 2 digits of paddedPenceNumberString
const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  // .padEnd(2, "0");
//5. takes the last 2 digits as the pence from paddedPenceNumberString
console.log(`£${pounds}.${pence}`);
//6. Prints the formatted pounds-and-pence value

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"

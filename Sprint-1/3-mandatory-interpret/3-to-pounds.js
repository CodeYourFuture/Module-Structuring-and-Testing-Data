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

// 2. const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1): This line removes the trailing 'p' from the string.

// 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"): This line puts the string into a 3 character string padding with zeros.

// 4. const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2): This line takes out the pounds part of the string.

// 5. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0"): This line takes out pence part and pads it to 2 characters.

// 6. console.log(`£${pounds}.${pence}`): This line prints the final results.
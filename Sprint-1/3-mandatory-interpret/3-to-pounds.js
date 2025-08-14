// 1. Initialise a string representing a price in pence with a trailing "p"
const penceString = "399p";

// 2. Remove the trailing "p" from the string to isolate the numeric part
const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

// 3. Pad the numeric string with leading zeros to ensure it has at least 3 digits
const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
// 4. Extract the pounds part by taking all but the last two digits
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);

// 5. Extract the pence part by taking the last two digits and pad with trailing zero if needed
const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

// 6. Output the formatted price in pounds and pence
console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"

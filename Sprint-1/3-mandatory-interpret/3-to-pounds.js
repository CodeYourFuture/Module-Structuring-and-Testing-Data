const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);
// Initialises the string and takes the numbers. not the p 

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"); // Ensures the numeric string has at least 3 digits by padding it with leading zeros if necessary.
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
); // Extracts the pounds portion of the price by taking all digits except the last two.

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0"); // Extracts the pence portion of the price by taking the last two digits and ensures it has exactly two digits.

console.log(`£${pounds}.${pence}`); // Constructs and logs the final price in the format £pounds.pence.

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"

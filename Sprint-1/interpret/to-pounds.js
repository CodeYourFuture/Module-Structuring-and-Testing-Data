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

//line 3. 
//const penceStringWithoutTrailingP = penceString.substring(
// 0,
/// penceString.length - 1)
// Creates a new string penceStringWithoutTrailingP by taking penceString but omitting the last character. This leaves us with just the numeric part ("399"), which we can now treat as an amount in pence.

//line 8. Pads the numeric part of the pence string (now "399") to ensure it is at least three characters long by adding leading zeros if needed.

//line 9.  Extracts the "pounds" portion from the padded string by taking all but the last two characters.

//line14. Extracts the "pence" portion by taking the last two characters and ensuring it is exactly two characters long by padding with trailing zeros if needed.

//line 18. Prints the formatted result as a string in the form "£pounds.pence".
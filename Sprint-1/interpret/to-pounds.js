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

// 2. const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1);
// Removes the trailing 'p' from the input string
// Rationale: We need to work with the numeric part of the string

// 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
// Pads the numeric string with leading zeros to ensure it's at least 3 characters long
// Rationale: This ensures we can always extract pounds and pence correctly, even for small amounts

// 4. const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2);
// Extracts all but the last two characters from the padded string to get the pounds amount
// Rationale: The last two digits represent pence, so the rest is pounds

// 5. const pence = paddedPenceNumberString
//   .substring(paddedPenceNumberString.length - 2)
//   .padEnd(2, "0");
// Extracts the last two characters for pence and pads with zeros if necessary
// Rationale: Ensures we always have two decimal places for pence

// 6. console.log(`£${pounds}.${pence}`);
// Outputs the formatted price string with pounds and pence
// Rationale: Presents the final result in the desired format (£X.XX)

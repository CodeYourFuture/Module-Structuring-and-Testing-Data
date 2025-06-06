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
// 2. Removes the trailing "p" character from the end of the string.
// 3. Ensures the string has at least 3 digits by padding it with "0" on the left
// 4. Extracts the pound part of the amount
// 5. Extracts the last two digits as the pence part and ensures it's 2 digits long
// 6. Outputs the final result in standard pounds and pence format.

// Summary 
     // Starts with a price like "399p"

     // Removes the "p"

     // Pads the string to ensure it's at least 3 digits (e.g., "5p" → "005")

     // Splits into pounds (everything except last 2 digits) and pence (last 2 digits)

     // Formats the final string as £X.XX
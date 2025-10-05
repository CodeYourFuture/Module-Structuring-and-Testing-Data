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
// 1. const penceString = "399p": initializes a string variable with the value "399p"


// const penceString = "399p"
// Stores original price string with 'p' suffix

// Remove trailing 'p'
// Uses .substring() to remove the last character
// "399p" → "399"

// Pad to 3 digits
// Ensures string has at least 3 digits for consistent parsing
// "399" → "399" (no change here)

// Extract pounds
// Takes all digits except last 2 as pounds
// "399" → "3"

// Extract pence
// Takes last 2 digits as pence, ensures 2-digit format
// "399" → "99"
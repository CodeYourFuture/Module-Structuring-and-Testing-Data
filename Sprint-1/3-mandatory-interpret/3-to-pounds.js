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

// 2. const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1); :
// Removes the "p" character so only the numeric part of the price remains.

// 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"):
// Ensures the number is at least 3 digits long by adding leading zeros when necessary, which helps with consistent formatting.

// 4. const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2); :
// Extracts everything except the last two digits to form the pounds portion of the price.

// 5. const pence = paddedPenceNumberString .substring(paddedPenceNumberString.length - 2) .padEnd(2, "0"); :
// Takes the final two digits of the padded string to form the pence portion.

// 6. console.log(`£${pounds}.${pence}`); :
// Combines the pounds and pence into a standard currency format and prints it to the console, "£3.99"
// The program takes a string representing a price in pence (e.g., "399p")
// and converts it to a string representing the price in pounds (e.g., "£3.99").

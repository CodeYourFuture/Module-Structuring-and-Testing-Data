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

// creates a string that represents a price in pence, including the letter "p"
//
// Example: "399p"
//
// This is the original input value we want to convert into pounds.


// 2. const penceStringWithoutTrailingP = ...
// Uses substring to remove the last character ("p") from the string
//
// We take the string from index 0 up to (but not including) the last character
//
// Result: "399"
//
// This leaves us with only the numeric part of the price as a string.


// 3. const paddedPenceNumberString = ...
// padStart ensures the string is at least 3 characters long
//
// This is important for small values like "5p":
// "5" becomes "005"
//
// Result for "399": "399"
// Result for "5p": "005"


// 4. const pounds = ...
// Extracts all characters except the last two
//
// The last two characters represent pence,
// everything before that represents pounds
//
// For "399":
// pounds = "3"


// 5. const pence = ...
// Takes the last two characters of the string
//
// padEnd ensures the pence value is always two digits
//
// For "399":
// pence = "99"


// 6. console.log(`£${pounds}.${pence}`)
// Combines pounds and pence into a formatted price string
//
// Final output:
// £3.99


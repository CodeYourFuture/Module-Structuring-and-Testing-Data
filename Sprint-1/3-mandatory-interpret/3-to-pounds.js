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
// 2. const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1); Removes the trailing "p" character from the string by slicing off the last character.
// 3.const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"); Ensures the number is at least 3 characters long by adding leading zeros if necessary (e.g., "9" becomes "009").
// 4. const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2); Extracts the pound portion by taking all but the last two characters (e.g., from "399", this becomes "3").
// 5. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0"); Extracts the last two characters as pence (e.g., from "399", this gives "99"). .padEnd(2, "0") ensures we still get two digits (e.g., from "3" it would become "30").
// 6. console.log(\£${pounds}.${pence}`);` Outputs the final result in the format £x.xx (e.g., £3.99).
// Example with "9p":
"9p" -> "9"
Pad to "009"
Pounds = "0"
Pence = "09"
Output: £0.09

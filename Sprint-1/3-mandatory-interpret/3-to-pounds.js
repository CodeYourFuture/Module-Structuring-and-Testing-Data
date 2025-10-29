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
// Removes trailing "p" from "399p" to get "399"
// substring(0, 3) extracts characters from index 0 to 2
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring

// 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
// Ensures string has at least 3 characters by adding leading zeros
// "399" stays "399", but "9" would become "009" (for 9p = £0.09)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart

// 4. const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2);
// Extracts all except last 2 characters for pounds
// "399" → substring(0, 1) → "3" (£3)

// 5. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");
// Extracts last 2 characters for pence and pads to 2 digits
// "399" → substring(1) → "99", then padEnd(2, "0") → "99"
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd

// 6. console.log(`£${pounds}.${pence}`);
// Formats and displays result using template literal: "£3.99"
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

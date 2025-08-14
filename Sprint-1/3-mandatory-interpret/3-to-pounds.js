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

// 2.const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1);
// Removes the "p" at the end, leaving just the number as a string ("399").

// 3.const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
// Ensures the number has at least three digits by adding leading zeros if needed. Example: "5" becomes "005".

// 4.const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2);
// Takes everything except the last two digits to get the pound amount. Example: "399" => "3".

// 5.const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length => 2).padEnd(2, "0");
// Takes the last two digits as the pence amount.
// If there’s only one digit, it adds a zero at the end. Example: "399" → "99", "5" => "05".

// console.log(\£${pounds}.${pence}`);`
// Combines pounds and pence into a proper price format (£3.99).
// Examples: "399p" => £3.99
//           "5p" => £0.05
//           "50p" => £0.50

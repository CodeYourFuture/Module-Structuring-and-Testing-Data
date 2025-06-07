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

// 2. const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1);
// .substring - selects a section between the given indexes in a string -> "399", by doing this we remove the "p"

// 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
// The padStart() method pads penceStringWithoutTrailingP with another string (multiple times) until it reaches a given length 3.
// id we have a one digit number it adds two "004" but if the number is 3 digits will keep it as it is "399"

// 4. const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2);
// Extracts the pound portion, which is the first part of the 3-digit string -> "3"

// 5. const pence = paddedPenceNumberString
// .substring(paddedPenceNumberString.length - 2)
// .padEnd(2, "0");
// it is two separate parts
// first - with substring method we select the two last digits
// second - ensures that if somehow only one digit is returned it’s padded to two characters by adding a "0" to the end.

// 6. Displays the formatted price in British pounds -> £3.99 or £0.05
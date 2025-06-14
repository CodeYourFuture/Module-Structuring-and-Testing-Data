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
  //.padEnd(2, "0");
  // PadEnd is not needed in this case, as the pence value is always two digits.
  // If you want to ensure that the pence value is always two digits, you can use padEnd.
console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"
//// 2. const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1):
//    removes the trailing "p" from the string, resulting in "399"
// 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"):
//    pads the string with leading zeros to ensure it has at least 3 characters, resulting in "399"
// 4. const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2):
//    extracts the pounds part of the string by taking all characters except the last two, resulting in "3"
// 5. const pence = paddedPenceNumberString
//    .substring(paddedPenceNumberString.length - 2).padEnd(2, "0"):
//    extracts the last two characters (the pence part) and pads it with trailing zeros to ensure it has 2 characters, resulting in "99"
// 6. console.log(`£${pounds}.${pence}`):
//    prints the formatted price in pounds and pence, resulting in "£3.99"
//
// The purpose of this program is to convert a price given in pence (with a trailing "p") into a formatted string representing the price in pounds and pence.
// The rationale behind each step is to ensure that the final output is correctly formatted, with leading and trailing zeros as necessary,
// and to separate the pounds and pence components for clarity in the output.
// The program effectively handles the conversion and formatting of the price, ensuring that it adheres to the expected currency format.


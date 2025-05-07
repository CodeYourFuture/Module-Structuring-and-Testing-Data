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

// 2. Line 3: const penceStringWithoutTrailingP = penceString.substring(0,penceString.length - 1);
// Removes the "p" at the end, leaving just "399" as a string.

// 3. Line 8: const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
// Ensures the pence value has three digits by adding a 0 ast the start.

// 4. Line 9: const pounds = paddedPenceNumberString.substring(0,paddedPenceNumberString.length - 2);
// Removes everything except the last two digits to get the pound amount (i.e: "399" keeps the "3", which is the £3)

// 5. Line 14: const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");
// Gets the last two digits pence and ensures they are always two digits.

// 6. Line 18: console.log(`£${pounds}.${pence}`);
// This prints the final price £3.99
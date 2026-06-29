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

/* 2. const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
): Removes the trailing "p" from the original String, leaving only the numeric part. It takes a substring starting at index 0 and ending just before the last Character, so "399p" becomes "399".

3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"): Ensures the pence value is at least three characters long by padding with leading zero if necessary. Eg, "3" would become "003", "99" would become "099" while "399" remains "399".

4. const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
): Extracts the pounds portion from the padded string by taking all characters except the last two, making "399" be "3" representing the pounds component.

5.const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0"): Extracts the last two characters as the pence portion and ensures it is exactly two digits by padding with trailing zeros if needed. "399" becomes "99", representing the pence component.

  6. console.log(`£${pounds}.${pence}`): Outputs the final formatted price in pounds and pence. Eg, £3.99.

*/

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

/*To begin, we can start with
1. const penceString = "399p": initialises a string variable with the value "399p"

// 2. Removes the trailing "p" from the end of the string
//    For example: "399p" becomes "399"
const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

// 3. Ensures the string has at least 3 digits by adding leading zeroes if needed
//    This helps standardize values like "3" → "003", "99" → "099"
//    So later we can cleanly split pounds and pence
const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
// 4. Extracts the pound part by taking all but the last 2 digits
//    For example: "399" → "3", "099" → "0", "005" → "0"
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);
// 5. Extracts the pence part by taking the last 2 digits of the padded string
//    Also ensures it always has 2 digits by padding to the right if needed
//    For example: "399" → "99", "005" → "05"
const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");



*/

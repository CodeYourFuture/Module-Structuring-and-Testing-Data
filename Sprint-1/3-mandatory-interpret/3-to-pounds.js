const penceString = "104569p";

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
// 2. const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1): Removes the "p" from the end.
// 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"): Makes the string at least 3 letters long by adding "0"s to the front.
// 4. const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2): Grabs everything except the last two digits to find the "pound" amount.
// 5. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0"): Grabs exactly the last two digits.
// 6. console.log(`£${pounds}.${pence}`): Combines the pounds and pence with a decimal point and a "£" symbol.
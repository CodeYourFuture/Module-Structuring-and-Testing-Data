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
// 2. Line 3 Removes the letter p from the end of the string
// 3. Line 8 keeps the length to 3 and adds a 0 if the length is smaller like 50p -> 050 or 5p -> 005
// 4. Line 9 calculates the pounds part from the amount by taking all digits except the last two.
// 5. Line 14 displays the pence of the remaining 2 digits
// 6. Line 18 converts and displays the output result on the terminal of the total in currency format of £whole with pence after the decimal


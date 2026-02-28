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

// 2. const penceStringWithoutTrailingP = penceString.substring(  0, penceString.length - 1);
// This creates a constant variable penceStringWithoutTrailingP and splices the last character "p" from the string. Only the number remains.

// 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
// This creates a constant variable padedPenceNumberString and puts 0s at the start of the string until the total lenght of the string is 3.

// 4. const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2);
// This creates a variable pounds and removes two chars from the string, leaving only the pounds value.

// 5. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");
// This creates a variable pence and removes all chars except the last two, leaving only the pence value. It adds 0s at the end of the string until length = 2.

// 6. console.log(`£${pounds}.${pence}`);
// This prints the number of pounds and pence, this is £3.99
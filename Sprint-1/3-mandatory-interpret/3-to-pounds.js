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
// 2. Line 3: uses the substring method to remove the "p" from the end of the string
// 3. Line 8: the variable paddedPenceNumberString is used to ensure that the string has at least 3 characters,
// if not it will add a zero to the start of the string
// 4. Line 9 - 11: the variable pounds uses the substring method in the same way as line 3 but this time removes the last two characters
// the result is now stored in the const 'pounds' to be used in the final output
// 5. Line 14 - 16: the variable pence also uses the substring method to extract the last two characters from paddedPenceNumberString
// the result is now stored in the const 'pence' to be used in the final output, a '0' is added to the end of the string if there is only one character
// 6. Line 18: the console.log function prints our output - the values stored in the consts 'pounds' and 'pence'.
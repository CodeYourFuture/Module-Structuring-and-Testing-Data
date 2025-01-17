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

const pence = paddedPenceNumberString // 399
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"


// 3-5. Method substring identifies length and Removes (p) element from the end of string.
// 8.Method padStart identifies any symbols after 3 if they are. And change them to 0.
// 9-11. Removes 2 symbols from the end. In our case its 99.
// 14-16.It identifies starting index based on length -2. And to check if there sre 2 digits. If less it will add 0 in the end.
// 18. It shows result in console log- pounds.pence.
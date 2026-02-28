// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// 1. initialise a string variable with the value "399p"
const penceString = "399p";

// 2. remove the final character ("p"), leaving only the numeric portion as a string
const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

// 3. ensure at least three digits by padding with leading zeros so we can split pounds/pence
const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");

// 4. take all but the last two characters; that's the pounds amount
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);

// 5. extract the last two characters as the pence amount and pad right with a zero if needed
const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

// 6. formats the pounds and pence into a currency string and prints it
console.log(`£${pounds}.${pence}`);

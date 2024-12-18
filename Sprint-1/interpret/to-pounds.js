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
console.log(paddedPenceNumberString)
console.log()
const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

console.log(`£${pounds}.${pence}`);

// This prograpaddedPenceNumberString takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"
// 2. Line 3 Removes trailing the p
// 3. Line 8 added 0 to front of 399 to become 0399
// 4. Line 9 Extracts the pound portion of the value as 03 
// 5. Line 14 Extracts the pence portion of the value as 99
// 6. Line 18 Constructs a formatted string to pounds and pence (£pounds.pence).('399' to £3.99)


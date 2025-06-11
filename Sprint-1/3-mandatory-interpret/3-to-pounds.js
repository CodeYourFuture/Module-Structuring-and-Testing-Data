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
// # 1. const penceString = "399p": initialises a string variable with the value "399p"
// # 2. const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1):
//    removes the trailing 'p' from the string, resulting in "399"
// # 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"):
//    pads the string with leading zeros to ensure it has at least 3 characters, resulting in "399" (no change needed here)
// # 4. const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2):
//    extracts the pounds part from the string, which is "3" in this case
// # 5. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0"):
//    extracts the pence part from the string, which is "99" in this case, and pads it to ensure it has 2 characters
// # 6. console.log(`£${pounds}.${pence}`):
//    prints the final formatted string representing the price in pounds, which is "£3.99"

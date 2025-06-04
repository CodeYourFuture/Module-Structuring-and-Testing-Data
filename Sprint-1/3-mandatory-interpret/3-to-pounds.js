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

console.log(`£${pounds}.${pence}`); // Output: "£3.99"

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"
// 2. const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1): 
// removes the trailing "p" from the string, resulting in "399"
// 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"): 
// pads the string with leading zeros to ensure it is at least 3 characters long, resulting in "399"
// 4. const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2): 
// extracts the pounds portion from the padded string, resulting in "3"
// 5. const pence = paddedPenceNumberString
//   .substring(paddedPenceNumberString.length - 2)
//   .padEnd(2, "0"):
// extracts the pence portion from the padded string and pads it with trailing zeros 
// to ensure it is 2 characters long, resulting in "99"
// 6. console.log(`£${pounds}.${pence}`): logs the final formatted string 
// representing the price in pounds, resulting in "£3.99"

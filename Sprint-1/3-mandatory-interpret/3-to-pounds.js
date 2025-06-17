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

// 2. const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1): removes the trailing p to isolates the numeric part of the price. Here, it will be "399".

// 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"): pads the numeric string with zeros to ensure it has at least 3 digits. Here, it will be "399" because we already have 3 digits.

// 4. const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2): extracts the pounds part from the padded string by taking all but the last two digits. Here, it will be "3".

// 5. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0"): extracts the pence part from the padded string. It also ensures that it has exactly 2 digits by padding with trailing zeros. Here, it will be "99".

// 6. console.log(`£${pounds}.${pence}`): formats and prints the final price in pounds and pence format. Here, it will output "£3.99".

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
// 2. penceString.substring(0, penceString.length - 1): removes the trailing "p" by taking all characters except the last one -> "399"
// 3. paddedPenceNumberString = "399".padStart(3, "0"): ensures the string is at least 3 characters long, padding with "0" on the left if needed. "399" stays "399" but "5p" would become "005"
// 4. pounds = paddedPenceNumberString.substring(0, length - 2): takes everything except the last 2 digits, giving the pounds part -> "3"
// 5. pence = paddedPenceNumberString.substring(length - 2).padEnd(2, "0"): takes the last 2 digits for the pence -> "99". padEnd ensures it stays 2 digits e.g. "5" would become "50"
// 6. console.log prints the final result combining pounds and pence -> £3.99
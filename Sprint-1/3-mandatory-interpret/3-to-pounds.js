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
// 2. const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1);: This removes the last character ("p") from the string. penceString.length - 1 gives the position of the last character. substring(0, ...) gets everything from the start up to (but not including) the "p".
// 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"); : Makes sure the string has at least 3 characters by adding zeros at the beginning if necessary. This is to ensure there is always enough digits to split into pounds and pence.
// 4. const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2); : Takes all but the last two digits to get the pounds part of the price.e.g. "399" = "3".
// 5. const pence = paddedPenceNumberString : substring(paddedPenceNumberString.length - 2) / padEnd(2, "0"); - This gets the last two digits — the pence part — and makes sure it’s always 2 digits e.g. "399" = "99".
// 6. console.log(`£${pounds}.${pence}`); : This puts everything together into pounds and pence format.




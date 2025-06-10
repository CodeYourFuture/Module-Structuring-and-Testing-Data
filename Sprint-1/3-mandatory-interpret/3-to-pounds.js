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
// 2. const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1): removes the trailing 'p' from the string by using the substring method and passing it the start index (0) and the end index (length - 1) returning "399".
// 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"): pads the string with leading zeros to ensure it has at least 3 characters, resulting in "399" remaining unchanged.
// 4. const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2): extracts the pounds part of the string by taking all characters except the last two, resulting in "3".
// 5. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0"): extracts the last two characters of the string and pads it with trailing zeros if necessary, resulting in "99" since it already has two characters.
// 6. console.log(`£${pounds}.${pence}`): prints the final formatted string in pounds and pence, resulting in "£3.99". by concatenating the pounds and pence variables with a '£' symbol and a '.' in between.

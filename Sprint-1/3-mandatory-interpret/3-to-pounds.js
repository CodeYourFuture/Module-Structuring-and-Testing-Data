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

// 2. const penceStringWithoutTrailingP = penceString.substring( 0, penceString.length - 1);
// penceString.length -1: points to the index just before the last character. The substring(0, ect) takes everything from the start up to the last character (but not including the last character)
// The result removes th trailing "p" so the output becomes "399p" --> "399"

// 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");: 
// Ensures the pence int has at least 3 characters by adding leading zeros if required.
// This is useful for values under 100p so the pounds/pence split works accurately.

// 4. const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2);
// This takes everything except the last two digits
// The last two digits represent the pence, so whatever is left over fro the calculation is the pounds.

// 5. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");
// The substring(paddedPenceNumberString.length - 2) takes the last two characters as the pence part "399" and converts it into "99"
// The .padEnd(2, "0") ensures the pence part is always 2 digits by adding trailing zeros if needed.
// In most cases there are already two digits, however part of the code protects against edge cases such as "3" becoming "30" which would be an inaccurate outcome.

// 6. console.log(`£${pounds}.${pence}`);
// Prints the final formatted price in pounds and pence. An example would be "399p" would print as "£3.99
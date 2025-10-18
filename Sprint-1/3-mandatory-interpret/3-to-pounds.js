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

// 1. const penceString = "399p": initialises a string variable with the value "399p".
// 2. const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1): removes the trailing "p" from the string by taking all characters from index 0 up to but not including the last one, leaving "399". This isolates the numeric part of the price.
// 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"): ensures the numeric string has at least three digits by adding leading zeros if needed (for example, "5p" becomes "005"). This makes it easier to separate pounds and pence later.
// 4. const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2): extracts all digits except the last two to represent the pounds. For "399" this gives "3".
// 5. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0"): takes the last two digits of the string as pence, and if needed, pads the end with a zero to ensure two digits. For "399" this gives "99".
// 6. console.log(`£${pounds}.${pence}`): prints the formatted price as a string in the style of "£3.99". The program as a whole converts a pence-based string like "399p" into a properly formatted pounds and pence display.

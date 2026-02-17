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

// Step-by-step breakdown:

// 1. const penceString = "399p";
// Initialises a string variable with the value "399p".

// 2. const penceStringWithoutTrailingP = ...
// It removes the last character ('p') from the string to keep only the numbers.

// 3. const paddedPenceNumberString = ...
// It ensures the string has at least 3 characters by adding a "0" at the beginning if needed (e.g., "50" becomes "050").

// 4. const pounds = ...
// It extracts the pounds part by taking all characters except the last two.

// 5. const pence = ...
// It extracts the last two characters to represent the pence part and ensures it has two digits.

// 6. console.log(`£${pounds}.${pence}`);
// It prints the final result in the currency format: £3.99.

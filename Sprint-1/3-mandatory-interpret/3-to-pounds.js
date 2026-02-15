const penceString = "9p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);

const pence = paddedPenceNumberString.substring(
  paddedPenceNumberString.length - 2
);

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// Step 1: initialize the string variable penceString with the value "399p"
// const penceString = "399p";

// Step 2: Remove the "p" from the end of "399p" and store the value to penceStringWithoutTrailingP
// const penceStringWithoutTrailingP = penceString.substring(0,penceString.length - 1);

// Step 3: The padStart method is used to ensure that the paddedPenceNumberString string variable has at least 3
// characters, padding it with "0" at the start if necessary. Since paddedPenceNumberString is already 3 characters
// long, no padding is added.
// const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");

// Step 4: The substring method is used to extract the pounds part of the price and store it in the variable pounds.
// const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2);

// Step 5: The substring method is used to extract the pence part of the price and store it in the variable pence.
// It uses the padEnd method to ensure that the pence string has at least 2 characters, padding it with "0" at the end if necessary.
// const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2). The earlier version included dead code
// (.padEnd(2, "0") which was unnecessary as Line 8 already ensures that the string is at least 3 chars long, so the last 2
// digits of paddedPenceNumberString are already the 2 digits of the cent amount

// Step 6: The console.log method is used to output the final price in pounds and pence format.
// console.log(`£${pounds}.${pence}`);

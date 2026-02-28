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
1. const penceString = "399p": initialises a string variable with the value "399p"
2. const penceStringWithoutTrailingP = penceString.substring(
  0, penceString.length - 1);
This line removes the trailing "p" from the pence string, leaving just the numeric value "399".

3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
This line pads the numeric string with leading zeros to ensure it is at least 3 characters long, resulting in "0399".

4. const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);
This line extracts the pounds part by taking all characters except the last two (which represent pence), resulting in "03".

5. const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");
This line extracts the last two characters (representing pence) and ensures they are exactly two digits long by padding with trailing zeros if necessary, resulting in "99".

6. console.log(`£${pounds}.${pence}`);
This line logs the formatted price in pounds and pence, e.g., £03.99.
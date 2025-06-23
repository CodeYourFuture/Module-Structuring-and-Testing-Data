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

/* Answer

1. const penceString = "399p": initialises a string variable with the value "399p"

2. const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
); 
-- This removes the "p" character from the string. Then substring(0, penceString.length - 1) takes everything except the last character
Result: "399"

3.const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
-- This is done to make sure the number has at least 3 digits, so it perhaps can be separated into pounds and pence later. For example if it were "5", it would become "005"

4. const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);
-- This stores the pounds part. 
---paddedPenceNumberString.length - 2 means everything except the last two digits.
--- Therefore this will go from "399" to 3 pounds and 99 pence

5.const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

  --- Similar to the above, this capture the last two digits and turns them into pence.  from "399" to 3 pounds and 99 pence

6. console.log(`£${pounds}.${pence}`);

--- This output then logs the combination of the pounds and pence into a string that looks like a real money amount. £3.99

*/
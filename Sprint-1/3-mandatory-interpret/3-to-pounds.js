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

// 2. const penceStringWithoutTrailingP = ... 
// Removes the last character (the "p") from the string using substring(), leaving just the numbers.

// 3. const paddedPenceNumberString = ...
// Uses padStart(3, "0") to make sure the string is at least 3 characters long by adding "0"s to the front. 

// 4. const pounds = ...
// Uses substring() to extract all characters EXCEPT the last two. This isolates the pound value.

// 5. const pence = ...
// Extracts exactly the last two characters for the pence value using substring(), 
// and uses padEnd() as a safety measure to ensure it's exactly 2 digits long.

// 6. console.log(...)
// Uses template literals to piece the pounds and pence back together with a "£" and "." symbol, printing "£3.99".
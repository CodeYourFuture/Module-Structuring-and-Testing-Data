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
// 1. const penceString = "399p": initializes a string variable with the value "399p"

/* 2. const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1): 
      Removes the 'p', substring(0, 3) extracts from index 0 up to (but not including) the last character.
      Purpose: Isolate the numeric part of the string.
*/

/* 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"):
      Ensures the numeric string has at least 3 digits, adding leading zeros if needed.
      Purpose: Makes it easier to split into pounds and pence.
*/

/* 4. const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2):
      Extracts substring except the last 2 digits, which will be pence.
      Purpose: Extract the pound part from the string.
*/

/* 5. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");
      Gets the last two digits of the padded string (the pence). 
      .padEnd(2, "0") ensures it's always 2 characters.
       Purpose: Extract the pence part of the string.
*/

/* 6. console.log(`£${pounds}.${pence}`):
      Logs the final formatted string to the console.
*/

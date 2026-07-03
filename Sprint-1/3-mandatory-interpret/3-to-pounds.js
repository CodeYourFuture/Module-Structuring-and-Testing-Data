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

// 2. const penceStringWithoutTrailingP = penceString.substring(0,penceString.length - 1): This removes the letter 'p' from the end of the string,
/* leaving just the numbers part of the string. The substring method is used to extract a portion of the string,
    starting from index 0 and ending at the second-to-last character (length - 1). */

// 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"); This is to ensure the numbers presented after the substring is at least 3 characters long,
// if the number is shorter the computer would add '0' or '0's in front of the number to make it 3 digits long.

// 4. const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2):
// This extracts the pounds part of the string by taking all characters except the last two.

// 5. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");
/* This extracts the pence part of the string by taking the last two characters and ensures that it is at least 2 characters long by adding '0' at the end
   if necessary as this is because we need the decimal value. */

// 6. console.log(`£${pounds}.${pence}`): This outputs the final answer in the format of pounds and allows the user to see the final result also.

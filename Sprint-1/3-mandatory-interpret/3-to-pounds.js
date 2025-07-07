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
/* 2. const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
); In this line, A new variable is created using the substring method. The substring method is used to extract a specific part of a string. 
Starting from index 0 and going up to but not including, the last character, the 'p' at the end of the string is removed. 
3.- const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"); 
This line assigns a new variable where the string is padded with leading zeros to ensure a length of 3. 
If the length was less than 3, zeros would be added at the start.
4. const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
); - In this line, the substring method is used to extract only the first character from the previously created paddedPenceNumberString variable,
 which has a length of 3. This extracted part is assigned to pounds.
5- And finally, here we use the substring method to take the last two characters, and then use the padEnd method to add zeros at the end if 
the length is less than 2.padEnd(2, "0") ensures the pence part always has two digits.Without this, if the pence is a single digit (e.g., "5"), 
it could be displayed incorrectly (e.g., "5" instead of "50").
*/

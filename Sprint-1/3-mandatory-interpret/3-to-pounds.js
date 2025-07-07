const penceString = "99p";

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

// To begin, we can start with
// 1. const penceString = "399p": initializes a string variable with the value "399p"
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
*/

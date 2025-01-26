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

// 2. the const penceStringWithoutTrailingP = penceString.substring( 0,  penceString.length - 1,
/*the substring(0) retuns 399p because substring (0) is the same as copying the entire string as it has no
    end parameter it will extract from start to end and 
    the length -1 with remove the last character meaning this whole function will return 399.*/

// 3. the const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0")
/* pedStart(3, "0") represent the number of characters a string should have in this case 3, and if the string dont meet the number of characters
    the start of the string will be filled with "0". But in this case the string length is already 3, therefor there 
    the padStart will not change anything*/

// 4. const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2
/* What this function is doing is first calling the function substring, but sing the function has no end parameter 
      it will extract the whole string, after that the length -2 function is called qith removes the last 2 characters of the function so
      that the whole functions returns "3" */

// 5. const pence = paddedPenceNumberString  .substring(paddedPenceNumberString.length - 2)  .padEnd(2, "0")
/*  What this function is firstly it will extract the last 2 characters of the string and 
      padEnd makes sure that the string has atleats 2 charaters which it does. Therefore this will return "99" */

// 6. console.log(`£${pounds}.${pence}`)
// this retuns 3.99

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
/*2. (lines 3-6) const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);
initialise a variable that takes part of penceString (.substring)
the substring being: starting from position 0 (so the first character) until position: length of penceString minus 1 (so the last character, which is the letter p)
*/
/* 3. (line 8): const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
this initialises another variable, paddedPenceNumberString that takes the value of penceStringWithoutTrailingP , pads it with 0's on the left hand side to make up three digits in total, so for example if the number is 2 digit, then the 1st digit will be 0
*/

/* 4 (lines 9-12)
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);
initialises another variable, pounds that is made up of the first few digits of paddedPenceNumberString, where few would be length of paddedPenceNumberString-2 (so essentially leaving the last 2 characters out)
*/

/* 5. (lines 14-16) 
const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");
initialises another variable, pence that takes the last two characters of paddedPenceNumberString, and makes sure its 2 digits by paddign it with 0's to 2 places
  */

/* 6 (line18)
console.log(`£${pounds}.${pence}`);
logs the values of pounds and pennies as a string to the console using a pound sign to start with
 */

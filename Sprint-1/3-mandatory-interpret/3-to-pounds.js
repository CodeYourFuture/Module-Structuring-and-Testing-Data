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

console.log(penceStringWithoutTrailingP);

// 3. const penceStringWithoutTrailingP = penceString.substring(
// initialises a string variable with value "399" by using function substring on penceString

// 4.   0,
// first argument for substring, taking part of the string starting from the first letter

// 5.   penceString.length - 1
// second argument for substring, taking the string up until the 3rd letter
// done by taking the whole string length (.length) of 4 and removing 1 (this removes the 'p')

// 6. );
// closes the arguments for the function

console.log(paddedPenceNumberString);

// 8. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
// Ensures the string is at least 3 in length, and if not adds zeros to the front
// This is to ensure later calculations don't return negative values

// 9-12. const pounds = paddedPenceNumberString.substring(
//  0,
//  paddedPenceNumberString.length - 2
// );
// Performing same function as lines 3 to 6, taking the padded string and removing the last two digits
// these are the digits representing pence, leaving a string that represents pounds and intialising
// that as a pounds variable of 3

// 14. const pence = paddedPenceNumberString
// intialising new pence variable

// 15.  .substring(paddedPenceNumberString.length - 2)
// performing substring function on the padded string this time for pence by starting the substring
// from the penultimate (-2) character of the padded string length

// 16. .padEnd(2, "0");
// ensures the pence string is at least 2 characters long, adding a zero to the start if not
// closing this function returns 99 to the variable pence

// 18. console.log(`£${pounds}.${pence}`);
// takes the pounds and pence variables and prints them to the log as a string with a decimal divider and added pound sign
// at the start: £3.99

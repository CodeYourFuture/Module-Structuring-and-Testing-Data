const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(0,penceString.length - 1);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
const pounds = paddedPenceNumberString.substring( 0, paddedPenceNumberString.length - 2);

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

// line 3. It creates a new string and assigns it to a variable called penceStringWithoutTrailingP by taking a portion of penceString, from the start (index 0) up to (but not including) the last character(penceString.length).

// line 5. Makes sure paddedPenceNumberString will always be a string with at least 3 characters by adding zeros at the beginning until it reaches a length of 3.

// line 6.The pounds variable takes the parts of paddedPenceNumberString from the start up to (but not including) the last two characters using subString() to get the pounds value from penceString.

// line 8. does the same thing with line 6 but adds zeros at the end if the values extracted by substring is less than 2 characters.

// line 12. logs the final output (£3.99) on the console using pounds and pence variables inside a template literal.
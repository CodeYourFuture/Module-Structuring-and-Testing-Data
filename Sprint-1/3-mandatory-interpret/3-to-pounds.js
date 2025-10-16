const penceString = "399p";
// Declares constant variable named penceString and assigns the string 399p
// This indicates price in pence

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);
// Constant variable is declared to remove the trailing p in 399p to just keep the numeric part
// penceString.length is number of characters in 399p = 4 so -1 is 3
// substring(0, 3) returns the characters from index 0 up to index 3 exclusive, returning 399.

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
// padStart ensures that the string has at least 3 characters by adding leading zeros if necessary
// This standardises the numeric string to simplify splitting into pounds and pence.
// In this case, 399 already has 3 characters, so no padding is added.

const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);
// The last two characters represent pence
// Const pounds is declared as a variable consisting of a substring of previously declared variable and a newly calculated variable
// paddedPenceNumberString.length computes index where last two characters start, so that is after 1 character.
// substring(0, 1) extracts the pounds part, by returning the characters from index 0 up to index 1 exclusive. 
// This is "3" in this case.

const pence = paddedPenceNumberString 
// New variable to ensure two-digit pence component is formatted correctly.
  .substring(paddedPenceNumberString.length - 2) 
  // returns substring from index to the end inclusive
  // For 399, start index is character 1 (the first 9) so this returns 99.
  .padEnd(2, "0"); 
  // Ensures pence string has at least 2 characters by adding trailing zeros if needed
  // So 5p would become 005 and this would return 05.

console.log(`£${pounds}.${pence}`);
// Template string  that joins pounds and pence parts with a decimal point and logs it
// This displays the standard and prints it to the console. 

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"

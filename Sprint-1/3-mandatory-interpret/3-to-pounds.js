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

/* 2) const penceStringWithoutTrailingP = penceString.substring(
      0,
      penceString.length - 1
      ); : Removes the trailing P
  .substring(0, penceString.length - 1) extracts a substring from the beginning up to (but not including) the last character
  Therefore removing P and only 399 is left as a string

  3) const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
    This makes sure that the string has at least 3 digits and leading zeros can be added if needed,
    
  4) const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);
This code extracts everything except the last two characters 
The last two characters represent pence while the first part of the string represent the value in pounds
So the code extracts the value in pounds

5) const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");
  This code extracts the value in Pence and makes sure it has 2 values

  .substring(paddedPenceNumberString.length - 2) extracts the last two characters which is the value of pence
  while .padEnd(2, "0") makes sure the pence value is always have two digits.

  6) console.log(`£${pounds}.${pence}`);
     This is the format for the return value
     It logs the data to the console and returns the value of the given parameter in this format: console.log(`£${pounds}.${pence}`);

  */

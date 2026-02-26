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
/* 1. const penceString = "399p": initializes a string variable with the value "399p"
   2. const penceStringWithoutTrailingP = This stores the substring of penceString by extracting all characters except the final p. It takes the substring from index 0 up to (but not including) the last character p, so "399p" becomes "399". This removes the unit symbol so only the numeric portion remains.
   3. const paddedPenceNumberString= This stores the value of penceStringWithoutTrailingP, padded to a total length of 3 characters by adding leading zeros where necessary. This guarantees there are always enough digits to separate pounds and pence correctly.
   4. const pounds= Stores the substring of paddedPenceNumberString from index 0 to the last 2 index. These leading digits represent the pound portion of the amount.
   5. const pence=  Extracts the final two digits of the padded string to represent the pence portion. padEnd(2, "0") ensures that the pence value always contains exactly two digits.
   6. console.log(`£${pounds}.${pence}`); logs the value of pounds and pence into a formatted currency string using template literals
*/

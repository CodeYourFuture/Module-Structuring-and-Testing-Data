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
// 1. const penceString = "399p": initializes a string variable with the value "399p"

//Answer

// 2. The lines 3-6 creates a new string when p is removed from pencestring
//    penceString.substring(0,penceString.length - 1) is used to extract the part of the string at the first character index 0
//    and the end from the evaluation of penceString.length - 1.  Character p which is excluded. This leaves us with 399
//
// 3. The lines 8 pads penceStringWithoutTrailingP(399) making it three characters long.
//    Three 0s were to be added but the string already has three characters making the result be 399

// 4. The lines 9-12 gets the pound value from paddedPenceNumberString(399)
//    it takes the substring starting from index 0 and ends with the evaluation of
//    paddedPenceNumberString.length - 2. The result will be 3

// 5. The lines 14-16 gets the last two digits of paddedPenceNumberString(399)
//    substring(paddedPenceNumberString.length - 2 is used to have two characters which will be 99
//    padEnd(2, "0") makes sure that the string has two characters by adding trailing zeros
//    and since 99 is two characters the result will be 99

// 6. The line 18 uses template literals and prints the final formatted string to the console. The results is £3.99

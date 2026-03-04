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
//2. const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1): removes the trailing "p" from the penceString to get just the numeric part of the price in pence.
//3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"): Ensures that the string always has 3 numbers by adding zeroes to the string if less than 3 characters. 
//4. const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2): Extracts the pounds part of the string. The last two digits are pence but the first is pounds. 
//5. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0"): Extracts the pence part of the string and ensures its always two digits by adding zeroes when needed. Although .padEnd(2,"0") is not needed in this case as the string will always be two digits because the length of the string is always 3 as ensured by .padStart(3,"0") on line 3.  
//6. console.log(`£${pounds}.${pence}`): Outputs the final price in pounds and pence format.
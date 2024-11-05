const penceString = "10p";

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
  ;

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": Initialize a string variable with the value "399p"
// 2. line 3-6 : function substring removes "p" from the end of the string and assign to new const
// 3. line 8 : function check the length that is 3 or not if not then add "0" to the start of the string until length become 3
// 4. line 9-12 : function substring remove 2 numbers in the end, it take all numbers except 2 last.
// 5. line 14-16 : function substring take number last 2 numbers.
// 6. line 18 : print the result include of : pound(dot)pence
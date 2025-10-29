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
// 1. const penceString = "399p": initialises a string variable with the value "399p".
// 2. line (3) it returns a substring from the given string, it takes penceString and returns the substring that start with index 0 ends one character before the end we have 399p it returns 399.
// 3. line (8) we have the string 399 that's 3 characters means we can split it to pounds. 
// 4. line (9) We have the start and the end. We start at 0, then end two characters before the string’s end, because the last two characters represent pence.    
// 5. line (14) This takes the last two characters of the string, which represent the pence portion of the price.it also Extracts the pence digits safely and makes sure it’s always two digits, even if the original number was small.
// 6. line (18) This prints the final price to the console in pounds and pence, using the pounds and pence variables to show it like £3.99.


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

// 2. The next step in lines 3-6 strips the letter p from the amount. 
// Without the p the amount-string becomes a number: 399

// 3. In lines 8-12 the number is padded with leading zeros if needed to ensure it has at 
// least three digits. This is needed for the last step: the conversion into an amount in 
// pounds, where the format requires at least three digits

// 4. In lines 14-17 the number is split into pounds and pence. 
// In line 16 the number is padded with trailing zeros to ensure the pence always have two digits

// 5. Then in line 20 the pounds and pence are put in a string with the pound sign in front of 
// it, and printed to the console


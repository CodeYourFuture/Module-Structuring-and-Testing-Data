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

/* 1. Set the string with pence:
   1.1. Let `penceString` = "399p" (string representing the number of pence)

2. Remove the trailing "p" character from the string:
   2.1. Get the substring of `penceString` excluding 
   the last character (the "p"), this will be `penceStringWithoutTrailingP`

3. Pad the pence number string with leading zeros to make it 3 characters long:
   3.1. Use the `padStart(3, "0")` method on `penceStringWithoutTrailingP` 
   to add leading zeros, saving the result in `paddedPenceNumberString`

4. Extract the number of pounds:
   4.1. Get the substring of the first 1-2 digits from 
   `paddedPenceNumberString`, which will give the number 
   of pounds, saved as `pounds`

5. Extract the number of pence:
   5.1. Get the last 2 characters of `paddedPenceNumberString`, 
   which will represent the number of pence, padded with zeros 
   at the end if needed, saved as `pence`

6. Output the result in the format "£pounds.pence":
   6.1. Print the string: `£{pounds}.{pence}` */
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
// 2. const penceStringWithoutTrailingP = a string value "399" is reassigned to penceStringWithoutTrailingP after
       // the the letter p is removed from "399p" 
// 3. const paddedPenceNumberString = declared new variable, padStart ensures any argument passed is at least 3 digits long.
// 4. Line 9 a new variable pence is declared and its value comes from the padded string by removing the last two strings.
        //     eg. 399  removing 99 get 3 if the intial amount was 55 after padding it would be 055 and the pound result would be 0

// 5. Line 14 const pence = declared a variable and the variable is the result after extracts the last two digits 
      // from the pence string and pads it to 2 characters to have two digit pence string.

// 6. Line 18- console.log(`£${pounds}.${pence}`); returns money amount combining pound and pence alog with the symbol £. 
// eg. £3.99
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


//1. const penceString = "399p": initializes a string variable with the value "399p"

// 2 to 6.const penceStringWithoutTrailingP = penceString.substring(0,penceString.length - 1);
//  removes the (p) at the end determined by removing the sudstring at the total length of the string -1

// 8.const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
//    makes sure the string is at least 3 characters long and if it is not it padds it with "0"

// 9.const pounds = paddedPenceNumberString.substring( 0, paddedPenceNumberString.length - 2);
//     gets the ammout of pounds by making a sub string that starts at the firts character (0) to the paddedPenceNumberString length -2 to exclued the last 2 characters (the p)

// 10.
// 18.console.log(`£${pounds}.${pence}`);
//      gives the console the result using a string literal

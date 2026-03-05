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

const pence = paddedPenceNumberString.substring(
  paddedPenceNumberString.length - 2
);

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

// 10.const pence = paddedPenceNumberString .substring(paddedPenceNumberString.length - 2);
// Gets the amount of pence by making a substring that starts at the paddedPenceNumberString length -2 to get the last 2 characters

// 18.console.log(`£${pounds}.${pence}`);
//      gives the console the result using a string literal
//console.log(`£${pounds}.${pence}`); :

// Combines the pounds and pence into a standard currency format and prints it to the console, "£3.99"
// The program takes a string representing a price in pence (e.g., "399p")
// and converts it to a string representing the price in pounds (e.g., "£3.99").

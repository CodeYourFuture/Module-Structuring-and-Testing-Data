const penceString = "399p";
//const penceString = "399p": initialises a string variable with the value "399p"

const penceStringWithoutTrailingP = penceString.substring(0,penceString.length - 1);
//Removes the last character ("p") from penceString, leaving only the numeric part.

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
//Ensures the numeric string has at least 3 digits by adding leading zeros if needed.
//"5" → "005"
//"99"→"099"

const pounds = paddedPenceNumberString.substring(0,paddedPenceNumberString.length - 2);
//Extracts everything except the last two digits, which represents the pounds value.
//"399"→"3"

const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");
//Extracts the last two digits as the pence value.
//padEnd(2, "0") ensures the pence value is always two digits long.

console.log(`£${pounds}.${pence}`);
//Displays the final formatted price using template literals in the format £pounds.pence.




// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"

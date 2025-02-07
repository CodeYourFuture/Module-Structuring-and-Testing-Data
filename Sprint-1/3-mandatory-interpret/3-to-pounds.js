const penceString = "399p";
// this p at the end of 399p represent pence

const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1);
// // this remove the letter p from the variable penceString. which means start from the first letter 0 and stop one character before the end. 

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
// This makes sure the string is at least 3 digits long by adding "0" at the start if needed.

const penceNumber = parseInt(paddedPenceNumberString, 10);
//  Converts the string to a number to avoid issues.

const pounds = Math.floor(penceNumber / 100); 
// get the whole pound

const pence = (penceNumber % 100).toString().padStart(2, "0"); 
// this code takes the last two digits for the pence part.

console.log(`£${pounds}.${pence}`);
// this evaluate the final price in pence and pound format 



// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"



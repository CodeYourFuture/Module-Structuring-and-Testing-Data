const penceString = "399p";
//intialises a string variable with the value 399p.

const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1);
// declare a new variable which is essentially tha same variable but without the last number.

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
// ensure the string reaches 3 digits by adding 0 at the start if its shorter. 
const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2);
//select everything before the last 2 digits as values for the variable pounds.

const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");
// apply the last 2 digital as values for variable pence while also making sure to add 0 atthe end if its shorter than 2

console.log(`£${pounds}.${pence}`); // this logs the resulting pounds and pence values with the sign £ at the start.

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"

const penceString = "399p";
// initialises a string variable with the value 399p

const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1);
// declares a new variable which is essentially the same variable but without the last letter p

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
 // ensures the string reaches 3 digits by adding 0 at the start if its shorter.
const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2);
 // select everything before the last 2 digits as value for variable pounds

const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");
// apply the last 2 digits as value for variable pence while also making sure to add 0 at the end if it's shorter than 2

console.log(`£${pounds}.${pence}`); // this logs the resulting pounds and pence values with the sign £ at the start.

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"

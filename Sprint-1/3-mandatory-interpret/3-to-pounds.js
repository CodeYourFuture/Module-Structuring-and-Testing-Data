const penceString = "39867p";
//create a variable with this value

const penceStringWithoutTrailingP = penceString.substring(  0,  penceString.length - 1);
// removes the 'p' from the end of the string

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
// makes sure the number has at least 3 digits by adding 0 at the start if needed


const pounds = paddedPenceNumberString.substring(  0,  paddedPenceNumberString.length - 2);
//takes all digits except the last 2 as the pounds--> ???.00



const pence = paddedPenceNumberString  .substring(paddedPenceNumberString.length - 2).padEnd(2, "0");
// takes the last 2 digits as the pence, adds 0 at the end if it's only 1 digit


console.log(`£${pounds}.${pence}`);
//print £pounds.pence

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"


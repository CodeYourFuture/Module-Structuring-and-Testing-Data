// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs


function convertToPounds (penceString) {
//penceString = "399p";
penceStringWithoutTrailingP = penceString.substring(0,  penceString.length - 1);

paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2);

pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");

return (`£${pounds}.${pence}`);
}
console.log(convertToPounds("845p"))

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"

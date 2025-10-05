const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring( 0,penceString.length - 1);
console.log(penceStringWithoutTrailingP);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
console.log(paddedPenceNumberString);
const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2);
console.log(pounds);

const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");
console.log(pence); 

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"
// 3. declaration of penceStringWithoutTrailingP, that = 399 because of method substracting()
// 6. declaration of paddedPenceNumberString, that = 399 because of padStart(3, "0")
// 8. declaration of paddedPenceNumberString, substring() cut two last characters, padEnd(3,"0") - add "0" on the right side.
// 11. declaration of pence, that substring(two last characters of paddedPenceNumberString ) and padEnd(2, "0") that may add two "00" in the end of the right side.
// 14. shoows pounds and pence with special sign and comma.
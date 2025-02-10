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
//My Answers
//line 3-6 : here we create a substring(penceStringWithoutTrailingP) from penceString from index 0 to 3. i.e 399
// const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
// this line add a string at the start of penceStringWithoutTrailingP if it is less than 3 char. 
//in this case it will add 0 in the begining of the string.
// line 9-12 : this declare pound and pound is equal to substring from the paddedPenceNumberString starting from the first index 0 to its length-2 (leaving the pences).
//line 14-16 :declare pences which are substrings of paddedPenceNumberString which hold the last 2 characters.
//.padEnd makes sure it have 0 to the right if the pence char is less than 2.
//line 18 console logs the pound and pence in correct formatting. eg £2.30
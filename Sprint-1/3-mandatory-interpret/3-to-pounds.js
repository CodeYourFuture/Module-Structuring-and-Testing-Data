const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2);

const pence = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2).padEnd(2, "0");
console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step



// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"

// line 3 extracting part of penceString and assigning it to penceStringWithoutTrailingP , 0 is the starting point and -1 is the last character so in this case "p" and will get 399 

// line 5 we adding 3 zeroes to the start of the string and assigning it to paddedPenceNumberString but they wont be added since we already have 3 characters 

// line 6 extract the first 2 characters of the string from paddedPenceNumberString and assigns it to pounds

// line 8 it extracts the last 2 characters and makes sure there will always be 2 

// line 9 displays the result of the code
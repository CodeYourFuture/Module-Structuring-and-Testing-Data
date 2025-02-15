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

// with the value "399p"You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each stepconst penceString = "399p";

// To begin, we can start with
// 1. const penceString = "399p": initializes a string variable 
// this one initializes the penceString value with of 399 in pence.

//const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1);
 //In this line, penceString is string with trailing p so to extract p substring is used  and penceString.length - 1,
 // will be p which will be extract.( penceString.length is 4(399p) penceString.length - 1 will extract end of the length which is p)
 //so out put will be 399.
// 

//const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
//This line make sure the string "penceStringWithoutTrailingP" has 3 character and also adding "0" if necessary and it also penceStringWithoutTrailingP is "99" also padded to "099".

//const pounds = paddedPenceNumberString.substring(0,  paddedPenceNumberString.length - 2);
//This line remove the part of the string which is pound and substring from the start(0) to characters before the end paddedPenceNumberString.   

//const pence = paddedPenceNumberString .substring(paddedPenceNumberString.length - 2) .padEnd(2, "0");
//This line of code extracts 2 characters of the string "paddedPenceNumberString" also pads the results to make sure it has 2 characters by adding 0 to format properly.
//Calculate the starting index of the last two characters of 399 (length - 2) input will be 99.
// It also Extract everything from that point to the end of the string using substring().

//console.log(`£${pounds}.${pence}`);
// It will print price in pound and pence in format. which will print 3.99
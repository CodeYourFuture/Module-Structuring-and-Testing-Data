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
// 1. const penceString = "399p": initialize a string variable with the value "399p"
// 2. const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1); it will remove the last character which is p
//    and return substring 399. so const penceStringWithoutTrailingP = 399;
// 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"); it ensures the string has at least 3 characters
//    which is 399 otherwise to make them three it will add 0 in front of string.
// 4. it will give a substring of (0,1) character  . const pounds =3 ; it will return.
// 5. const pence= 99. here paddedPenceNumberString length is 3 so it will remove last two character and .padEnd will make them 2 character long. for example
//    if it is 5 it will make it 05 .
// 6.  last line print value of pounds and pence variable.so printed result will be £3.99 

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

// to begin we can start with
//1- const penceSring= "399p": initialises a string variable with the value "399p"
//2- const penceStringWithoutTrailingP= a string value "399" is reassigned to penceStringWithoutTrailingP by removing the last character "p" from penceString using the substring method
//3- const paddedPenceNumberString= declared new variable, padStart ensure any argument passed is at least 3 characters long by adding leading zeros if necessary
//4- line 9 a new variable pence is declared and its value comes from the padded string by removing the last two characters which represent the pence.
//5- line 14 const pence= declared variable and the variable is the result after extracting the last two characters from paddedPenceNumberString using substring method and padEnd method is used to ensure that the pence value is always two digits long by adding trailing zeros if necessary
// from the pence string and pads it to two characters to have two digits number.
//6- line 18: console.log (`£${pounds}.${pence}`): returns money amount combing pounds and pence along with the £ symbol
//eg. £3.99
//declare a constant variable named penceString and assign it the string value "399p"
const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

// here we remove the trailing 'p' from the string using the method substring() -1 of the total length
console.log(penceStringWithoutTrailingP);


//this line pads will contain a length of at least 3 characters, adding leading zeros if necessary
const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");//399 or diff value -> 001

// here we extract the pounds part of the string by taking all characters except the last two eg. 399 -> 3
const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2); //3

console.log(` this is the padStart adding 0 if its necessary ${paddedPenceNumberString}, and this here we just take the integer part ${pounds}`);


// here we extract the pence part of the string by taking the last two characters eg. 399 -> 99
const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

  console.log(` this is the pence part we take the last two digits ${pence}`);
console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"

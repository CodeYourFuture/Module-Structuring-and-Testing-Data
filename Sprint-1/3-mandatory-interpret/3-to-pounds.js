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

// 2. const penceStringWithoutTrailingP = penceString.substring( 0,penceString.length - 1); this removes 
// the p from the value. the substring() takes two arguments , in which it starts at index 0 (the first character)and excludes the last 
//  character .

// 3. const paddedPenceNumberString: padStart(3, "0") ensures that the string penceStringWithoutTrailingP has at least 3 characters by adding leading zeros (if necessary).
//If the string is already 3 or more characters, it stays the same. If it's shorter, it adds "0" characters to the left until the string is 3 characters long.

// 4.const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2);
//This line extracts the pounds from the padded string by taking everything except the last two digits.
//substring(0, paddedPenceNumberString.length - 2) extracts the substring starting at index 0 and ending two characters before the end.
//The purpose here is to separate the whole pounds from the pence part of the string.
//For example, if paddedPenceNumberString = "399", it will extract "3" (the pounds).
// 5substring(paddedPenceNumberString.length - 2) takes the last two characters of the string.
//padEnd(2, "0") ensures that if the pence part is only one digit (e.g., "9" from "399"), it will be padded with a "0" at the end, making it two digits ("09").
//For example, if paddedPenceNumberString = "399", it will extract "99" as pence.

// 5.This line uses template literal to format the output with a pound symbol  and the pound and pence values.then logs the result to the console.
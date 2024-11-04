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
// 2. const penceStringWithoutTrailingP = penceString.substring(
// 0, penceString.length - 1); remove the "p" in penceString so it return "399"
// 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
//  the variable paddedPenceNumberString has a length of 3 caracters starting from "0"-3
// 4. const pounds = paddedPenceNumberString.substring(0,paddedPenceNumberString.length - 2);
// the variable paddedPenceNumberString has now "3" as the value since the last digit "99" were removed by the function 
// 5. const pence = paddedPenceNumberString .substring(paddedPenceNumberString.length - 2).padEnd(2, "0");
// allows to have 2 digits in pence 
const penceString = "4354301p";

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

//2. const penceStringWithoutTrailingP = penceString.substring(0,penceString.length-1) initialises a string variable that has a value of penceString without the last character

//3. const paddedPenceString = pence~StringWithourTrailingP.padStart(3,'0') initialises a string variable that has the value of penceStringWithoutTrailingP but ensures the string is at least 3 characters long by adding 0's to the start if needed

//4. const pounds = paddedPenceNumberString.substring(0,  paddedPenceNumberString.length - 2) initialises a string variable that has the value of paddedPenceNumberString without the last 2 characters

//5. const pence = paddedPenceNumberString.subString(paddedPenceNumberString.length-2).padEnd(2,'0') initialises a string variale with the value of the last 2 characters of paddedPenceNumberString and ensures the string is at least 2 characters long by adding 0's to the end if needed

//6. console.log(`£${pounds}.${pence}`) prints out the value of pounds and pence in £pounds.pence format by using string interpolation

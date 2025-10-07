const penceString = "399p";
//Initialize a string variable representing the price in pence with a trailing "p" characte

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);
//Remove the "p" so we can manipulate the numeric value 

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
// Pad the string to at least 3 digits so Makes it easier to separate pounds and pence consistently.

const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);
//Extract the pounds part so This gives the whole pounds part of the price.

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

  //Extract the pence part so Ensures pence is always 2 digits.

console.log(`£${pounds}.${pence}`);
//Combine pounds and pence into a formatted string

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"

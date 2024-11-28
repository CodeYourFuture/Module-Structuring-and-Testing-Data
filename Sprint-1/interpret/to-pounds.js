const penceString = "399p";

//The code below is used creates a variable and assigns it to the portion of a strings from the penceString variable between the first character and the last string, meaning it will exclude the last character.
const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);


//The variable paddedPenceNumberString is declared and assigned to the a resultant value after attempting to add characters particularly '0' at the beginning to value in the paddedPenceNumberString to reach the specified value of 3.
const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");

//The variable pounds does the same task as the penceStringWithoutTrailP except that the the character to be returned starts from the index 0 to index 1. Hence it only returns the character at index 0 which is the first character.
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);


//Pence variable returns the last two characters and then add '0's to it so that the length is equal to 2.
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

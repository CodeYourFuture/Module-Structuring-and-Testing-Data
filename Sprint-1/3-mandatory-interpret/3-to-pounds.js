const penceString = "399p";    

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);   //399

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"); //399
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);   //3

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

//2. const penceStringWithoutTrailingP = penceString.substring(
//   0,
//   penceString.length - 1
// ); :   it creates a variable with the value "399" by eliminating the character at index penceString.length - 1

//3.const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");:initialises a string variable of at least 3 characters, 
// if it has les than 3 characters it adds 0 to make up for it

//4.const pounds = paddedPenceNumberString.substring(
  //0,
//   paddedPenceNumberString.length - 2
// );:initialises a string variable with the value of  paddedPenceNumberString except the last 2 characters

//5.const pence = paddedPenceNumberString
  // .substring(paddedPenceNumberString.length - 2)
  // .padEnd(2, "0");: takes the last 2 characters from paddedPenceNumberString , it has to be 2 characters long if not it will add a 0 for 
  // every missing character
  //it adds a dot between pounds and pence and logs 3.99

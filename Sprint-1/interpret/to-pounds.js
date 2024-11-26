const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
  0, // extracts a portion of the string here starting from index 0
  penceString.length - 1 // extract ccarcter p (-1) index
); // the result is asing to penceStringWithoutTrailingP

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"); // check it the string has 3 characters
const pounds = paddedPenceNumberString.substring(
  0, //and stop with (0) so has to be 3 characters
  paddedPenceNumberString.length - 2 //gets the characters from the beginning of the string up to 2 characters from the end.
); // result is stored in paddedPenceNumberString

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2) // extracts the last 2 characters from the strin
  .padEnd(2, "0"); //ensures the string is at least 2 characters long

console.log(`£${pounds}.${pence}`); // this is the result in a currency format

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with initialising a string variable with the value "399p"
// const penceString = "399p";

//practising

let str = "Hello, world!";
let result = str.substring(0, 5); // Extracts "Hello"
console.log(result); // Outputs: Hello

let result2 = str.substring(7); // Extracts "world!" (from index 7 to the end)
console.log(result2); // Outputs: world!

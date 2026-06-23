const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);
// console.log(penceStringWithoutTrailingP);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
// console.log(paddedPenceNumberString);
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);
// console.log(pounds)

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");
// console.log(pence)
console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"
// 2. const penceStringWithoutTrailingP = penceString.substring(0, penceString.length-1): this 
// variable creates a new string that cuts the penceSting to 399,so it basically creates a new
// string from index 0, and removes the last index
// 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"); this variable sets 
// the penceStringWithoutTrailingP string length to 3, and if the length is shorter than 3 it adds 
// "0" in front. 
// 4. const pounds = paddedPenceNumberString.substring(0,paddedPenceNumberString.length - 2)
// this variable uses the subString function to further slice the paddedPenceNumberString
// string on from the first index and remove the last 2 parts of in. In this case the string goes 
// from '399' to just '3' 

// 5.const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");
// this variable creates a new string from the paddedPenceNumberString variable using the subString 
// function. This time it creates a new string from the last 2 indexes. Furthermore it sets the target 
// length for this new variable to 2 and if is is less than 2 it sets a condition to add
// a "0" in front


//6. console.log(`£${pounds}.${pence}`); this is a function call that displays the final amount in 
// pounds. It uses string interpolation to directly use the variable values pound and pence and also
//  formats the string by adding £ before the values. So the output displayed will be £3.99




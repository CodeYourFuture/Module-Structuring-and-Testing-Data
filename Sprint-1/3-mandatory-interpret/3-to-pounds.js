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

line 1. const penceString = "399p": initialises a string variable with the value "399p"
line 3. You define a penceStringWithoutTrailingP variable and call a function to cut a line, you use penceString.length -1 because 
you want to cut the p. 

line 8: You define a variable paddedPenceNumberString and call a function to add 0 into the letters, if the words are not three characters long.
line 9: You want to take the pound out of 399, so you call the function substring and only wants before the index 1, which is calculated by (0 , length -2); 

line 14: You call a variable function and you subtract the value from index 1 to the end. 
line 18: print the variable pound and the variable pence with the . 





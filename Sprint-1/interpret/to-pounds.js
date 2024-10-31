const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);//delete a p 

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"); //make sure three charachter.
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);// compare to pound.

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

console.log(`£${pounds}.${pence}`);
//This line extracts the last two digits from the padded pence number string, which represent the pence, and ensures it has exactly two digits.
// For "399", the result is "99" (99 pence), while for "009", it would be "09" (9 pence).

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"

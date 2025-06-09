const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1); // removes p


const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"); //take lengthe to three indexes
const pounds = paddedPenceNumberString.substring(
  0,                                                     //get 3
  paddedPenceNumberString.length - 2  //takes 
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
// 2. Takes the string 399p and removes the p from it giving us 399. We only need the
//    numeric part for further calculations
// 3. padStart(3,"0") pads the number with three zeroes so our string is always three
//   digit long so that we can always convert it into Pounds and pences(first digit being
//   pounds and last two being pences). In this case its already three digits.
// 4. Takes the string from the beginning up to the last two characters. For "399", it returns "3"  which represents £3.
//    this returns the pounds portion of the example to us.
// 5. It gets the last two digits "99" from "399" and ensures that it is always two digits 
// long using padEnd(2,"0"). This gives us the pence part in 399, always fornatted with
//two digits
//6. Prints the final formatted string using template literals.
// For "399p", this logs: £3.99




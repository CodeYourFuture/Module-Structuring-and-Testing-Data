const penceString = "399p";// initialises a string variable with the value "399p"

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);
// The substring method is used to extract a portion of the string, starting from index 0 and ending at the second-to-last index (length - 1).

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
//padStart method is used to add leading zeros to the penceStringWithoutTrailingP until it reaches a length of 3 characters
//  The result is stored in a new variable called paddedPenceNumberString.
//esure that to represent like 0.09 or 3.99
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);
//slice the paddedPenceNumberString until the last two characters, which represent the pounds.
const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");
  //slice the last two characters of the paddedPenceNumberString, which represent the pence.
  // by using penEnd method esure the it is two characters long. if it is not add zeros to end.

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"
// 2. const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1): 
// removes the last character "p" from the penceString and stores the result in a new variable called penceStringWithoutTrailingP.
// 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"): 
// adds leading zeros to the penceStringWithoutTrailingP until it reaches a length of 3 characters. 
// 4. const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2): 
// it like slicing , until the last two of the paddedPenceNumberString that represents the pounds.
// 5. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0"): 
// takes the last two characters 
// the panEnd method esure the it is two characters long. if it is not add zeros to end.
// 6. console.log(`£${pounds}.${pence}`): 
// Final result in console in the format of pounds and pence.
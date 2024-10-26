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
// 1. const penceString = "399p": initialises a string variable with the value "399p"
// 2. const penceStringWithoutTrailingP = penceString.substring(0,penceString.length - 1) : initialises 399 to penceStringWithoutTrailingP
//    substring extract string part so starting from 0 index and excluding end index ie, 3 (0, 4 - 1); it removes last character 'p'
// 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"): padStart adds 0 from the start if length is less than 3
// it make sure that string is having atleast 3 characters to split into pounds and pence, here '399' already have length 3 so its gives 399   
// 4. const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2): extracts substring 3 pound part from a string 399
// 5. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0"); extract pence part that is 99 here from 
//    string 399 and ensures it as atleast 2 characters in pence by using padEnd method
// 6. console.log(`£${pounds}.${pence}`): Logs the output to console ie, £3.99

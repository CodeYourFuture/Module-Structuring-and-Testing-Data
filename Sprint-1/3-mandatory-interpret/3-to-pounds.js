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
// 2. const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1): removes the "p" from the string to get "399"
// 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"): ensure it has at least 3 characters, resulting in "399" ,
//  for example if the input was "99p", it would become "099" after padding, ensuring we can correctly extract pounds and pence in the next steps.
// 4. const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2): 
// extracts the pounds part by taking the substring from the start to the length minus 2, resulting in "3"
// 5. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0"):
//  extracts the pence part by taking the last two characters and pads it with trailing zeros if necessary, resulting in "99"
// 6. console.log(`£${pounds}.${pence}`): 
// outputs the final formatted price in pounds and pence, which is "£3.99"

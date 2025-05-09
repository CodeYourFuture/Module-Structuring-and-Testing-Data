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
// 2. const penceStringWithoutTrailingP = penceString.substring(0,penceString.length - 1): extract every characters in penceString variable except the last one (penceString,length -1)
// 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"): ensures that the number is at least 3 digit long and if not adds 0 before the number not to change the value.
// 4.const pounds = paddedPenceNumberString.substring(0,paddedPenceNumberString.length - 2): extract everything but the last 2 digits (-2) from paddedPenceNumberString variable to get the pound number
// 5. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0"): similar to pound, it extract the last two digits of paddedPenceNumberString to get the pence number, If there’s only one digit, it ensures two digits by adding a trailing zero
// 6. console.log(`£${pounds}.${pence}`): in this line the pound value will be displayed to the user in this format: £ pound. pence

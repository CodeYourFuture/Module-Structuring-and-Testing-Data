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
// 2. const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1);  removes the 'p' from the string
// 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");    it makes sure that the number is 3 character long
// 4. const pounds = paddedPenceNumberString.substring( 0, paddedPenceNumberString.length - 2);   it takes all the characters except the last two which will be pences
// 5. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");   This process guarantees that the pence value is always represented as two digits, which is useful for currency formatting
// 6. console.log(`£${pounds}.${pence}`);  prints the pound part and pence part



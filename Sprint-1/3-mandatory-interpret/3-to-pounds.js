onst penceString = "399p";

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
// 2. const penceStringWithoutTrailingP = penceString.substring( 0, penceString.length - 1);
//    This remove the p and left the string with only 399
// 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
//    this code make sure that the string has 3 character. since one pound is equal 100 pence.
// 4. const pounds = paddedPenceNumberString.substring( 0, paddedPenceNumberString.length - 2);
//    This code takes the number leaving the last 2 digits  "in this case it takes 3 and leave 99"
// 5. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2)  .padEnd(2, "0");
//    This code takes the last digit from the string and also make sure that it has only two digits this gives a "99" value.
// 6. console.log(`£${pounds}.${pence}`);
//    his gives a result with £ sign and separated by . " in this case it gives £3.99 "

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
//2. const penceStringWithoutTrailingP variable will store the value which is calculated by using .substring  method on penceString. This returns the length of the string minus the trailing P.
//3. In order to make sure the string is three characters long we use .padstart() method and add in required "0" if it is less than the requirement. We then store it in the variable called paddedPenceNumberString
//4. In order to get the value of pound from paddedPenceNumberString we again use substring method and this begins at index 0 till paddedPenceNumberString.length - 2. This returns the first character of the string.
//5.  The paddedPenceNumberString.substring(paddedPenceNumberString.length - 2) extracts the last two characters and .padEnd(2, "0") is used to ensure that it has two digits which is stored in Pence. The .padEnd(2, "0") wont be needed in this case as it already has two digits.
//6. Console.log is used to output the pounds and pence via template literal.

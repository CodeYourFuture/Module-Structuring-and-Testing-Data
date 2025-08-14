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
// 1. Const penceString = "399p": initializes a string variable with the value "399p"
// 2. Empty
// 3. Const penceStringWithoutTrailingP initializes and assigned the value of function penceString.substring()
// 4. First position of string
// 5. End position of string taken with the length of the string minus the last character p using -1
// 6. Close function penceString.substring
// 7. Empty
// 8. Const paddedPenceNumberString initializes and assigned the value of function penceStringWithoutTrailingP.padStart(
// padding the string with "0" until it reaches the length 3
// 9. Const pounds initializes and assigned the value of function paddedPenceNumberString.substring(
//10. the number is extracted from the first character 
//11. to the length of the string except the last two characters.
//12. End of function
//13. Empty
//14. Const pence initializes and assigned the value of function paddedPenceNumberString.substring()
//15. using the length of the paddedPenceNumberString minus 2 for decimal (pens) values.
//16. Padding with 00 until two characters
//17. Empty
//18. Print on console the value using the characters £ representing pounds and dot separating pens.
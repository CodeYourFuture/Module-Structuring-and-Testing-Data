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
// 1. const penceString = "399p" <-- initialises a string variable with the value "399p"

// 3. const penceStringWithoutTrailingP = penceString.substring( 0, penceString.length - 1) <-- removes the last character from penceString (p) and assign the resulting value to a new variable penceStringWithoutTrailingP

// 8. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0") <-- using padStart, ensures the string is at least 3 characters. In case of the string being less than 3 characters, padStart will add "0" at the beginning until it reaches the required length. The resulting string is assigned to a new variable paddedPenceNumberString

// 9. const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2) <-- uses the substring() method to create a new string from paddedPenceNumberString without the last 2 characters. This new string is then assigned to the new variable pounds

// 14. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0") <-- takes the last two characters of paddedPenceNumberString and creates a new string that is then assigned to the variable pence. The padEnd() method, which ensures a length of 2 characters by adding a "0" at the end, seems to be redundant, as substring is already returning 2 characters, so the 0 will never be added.

// 18. console.log(`£${pounds}.${pence}`) <-- uses template literals to create a string by putting together "£", the pound amount, "." and the pence amount. Then string is then printed in the terminal with console.log()

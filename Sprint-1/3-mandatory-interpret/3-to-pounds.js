const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);
console.log(penceStringWithoutTrailingP)

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
console.log(paddedPenceNumberString)

const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);
console.log(pounds)
const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");
console.log(pence)
console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"
/* 3-6. const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);: creates a string variable called penceStringWithoutTrailingP with the value "399"
9. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");:it creates a string variable  has at least three characters
if it doesn't it will add one or more '0'
12-15. const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);:it creates a string variable with the value of '3'
17-19. it creates a string variable that has the value of the last 2 characters from '399' which is '99'
21.it logs the values of £ with pounds ,. ,  and pence combined resulting in £3.99
*/

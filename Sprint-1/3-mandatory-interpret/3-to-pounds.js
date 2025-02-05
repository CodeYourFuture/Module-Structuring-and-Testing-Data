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
// 1. const penceString = "399p": initializes a string variable with the value "399p"
/* 2. const penceStringWithoutTrailingP created to obtain a string without the trailing p from the end -1
   3. const paddedPenceNumberString declared to ensure that the number is three charters long as our example is 399, if not, zeros would be added at the start.
   4. const pounds declared to provide the first character from the number our ex :3 assumes as for pounds
   5. const pence declared to provide the last two characters from the number, and padEnd() 2 characters with 0 if required.
  but not needed in our case.
   6. The price is formatted in pounds and pence, and pounds sign added as well using template literals.
  
   */

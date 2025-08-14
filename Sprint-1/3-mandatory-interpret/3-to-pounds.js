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
// 2. The variable penceStringWithoutTrailingP removes the trailing by returning a part of the "399p" string, from index 0 (the start of the string) up till the strings length - 1 index.  This remove the last letter in the string.
// 3. The variable paddedPenceNumberString addresses the edge cases if the value given is less than 1 pount (99p). In the event of that, a "0" will be added to the the start of the string.
// 4. The variable pounds creates a substring which removes the last 2 indexes of paddedPenceNumberString, thereby removing the pence part of the value.
// 5. The vaiable pence creates a substring of the last 2 indexes of paddedPenceNumberString, thereby reflecting only the pence part of the value.
// 6. console.log(`£${pounds}.${pence}`) then logs template literal string to the console outputting the pount value, a point, and the pence value.
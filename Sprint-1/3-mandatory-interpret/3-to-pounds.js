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
// 2. Using the String.substring method, cuts the trailing p out of the string
// 3. Using String.padStart method, makes the penceStringWithoutTrailingP to length of 3
// by adding 0 to the left, if it is not length of 3
// 4. Takes the first character of paddedPenceNumberString and assigns it to pounds
// 5. Takes from position 1 of paddedPenceNumberString to the end and makes it the length of 2
// by adding 0 to the end and assigns it to pence
// 6. Prints the calculates pounds and pence

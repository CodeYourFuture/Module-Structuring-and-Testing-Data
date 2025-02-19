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
// 0399
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
// 2. penceStringWithoutTrailingP: separates the number from the 'p', so it's now "399"
// 3. paddedPenceNumberString: adds a 0 to the start, so it's "0399"
// 4. pounds: extracts the first 2 characters to get the pounds, so it's "03"
// 5. pence: gets all the characters after 2nd character, so it's "99". The 'padEnd(2)' makes sure there is always two digits for the pence part
// 6. 'console.log(`£${pounds}.${pence}`): logs the amount in pounds and pence, with a dot separating the two.

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
// 1. Stores "399p" as a string
// 2. removes the "p" at the end 
// 3.  adds zeros at the start if needed to make it 3 digits.
// 4. Takes everything except the last 2 digits as pounds.
// 5. Prints the result in this format: £3.99

// I also tested it by changing 399p to 50p and the result was £0.50 thats shows diffrent numbers well have diffrent outputs

// To begin, we can start wit
// 1. const penceString = "399p": initialises a string variable with the value "399p"

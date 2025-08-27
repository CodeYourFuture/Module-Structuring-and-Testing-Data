const penceString = "5p";

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

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialize a string variable with the value "399p"
//2. Removes the trailing "p" from the string: and result will be 399
//3. Ensures the number has at least 3 digits by padding from the left with zeros: like 000
//4. Extracts the pound portion: "3"
//5.Extracts the pound portion: "99"
//6. Extracts the pound portion: in the standard monetary format of pounds and pence: "£3.99"

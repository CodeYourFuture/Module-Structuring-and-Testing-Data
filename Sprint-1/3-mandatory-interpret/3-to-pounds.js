const penceString = "399p";
  
const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
const pounds = paddedPenceNumberString.substring(0,paddedPenceNumberString.length - 2);

const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"
// 2. Remove the 'p': = This removes the 'p' at the end, so we just have "399"
// 3. Pad with zeros: = This adds zeros at the start if needed, ensures that the pence value has at least 3 digits("50p ~ 005")
// 4. Split pounds and pence: = "399" ~ "3"("99"are the pence)
// 5. final output: = Input: "399" ~ Output: "3.99" 
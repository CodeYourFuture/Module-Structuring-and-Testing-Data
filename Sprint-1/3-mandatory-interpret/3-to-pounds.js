const penceString = "399p";
// 1. const penceString = "399p": initialises a string variable with the value "399p"
const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);
//2. Removes the trailing "p" from the pencestring, leaving 399 as the new value.
const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
//3. This line ensures there are three characters, at least, by adding "0" to the start if necessary.  
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);
//4. We are extracting the pounds now, ie the first character. 
const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");
//4. Here, we are extracting the last two digits, ie pence. Padend insures there are two digits and adds a "0" to compensate, if necessary.
console.log(`£${pounds}.${pence}`);
//5. Here it should show the final result of £3.99


// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

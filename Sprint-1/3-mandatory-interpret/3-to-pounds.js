const penceString = "1509p";

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

// Rational behind each step
// 1. const penceString = "399p": initialises a string variable with the value "399p"
// 2. Lns3-6 strip off the p using .substring() with indexing
// 3. Ln8 limits the string characters to 3 and will pad up from the front with zeros to get 
// the 3 characters. it uses the pad.start() method with the arguments (3,"0")
// 4. Lns9-12 uses substring method again to fetch out the first character only.
// 5. Lns14-16 fetches the last two characters using the substring method again and uses the 
// padstart method to make use there will always be a "0" added to make sure it is two characters 
// if needed.
// Ln18 outputs the pound and pence literals

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
// 1. const penceString = "399p": initialises a string variable with the value "399p". The trailing "p" indicates the unit



//2. Removes the"p" at the end of the string.
To isolate the numeric part 

//3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");

//Pad the numeric string with leading zeros to ensure it has at least 3 digits

//4.const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);
//Extract the pounds part by taking all but the last two digits

//5.Extract the pence part by taking the last two digits and pad with trailing zero if needed
const pence = paddedPenceNumberString
.substring(paddedPenceNumberString.length - 2)
.padEnd(2, "0");

// 6. Output the formatted price in pounds and pence
console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
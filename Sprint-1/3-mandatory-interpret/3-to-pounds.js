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

// 2. const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1);
//  This takes the variable penceString and uses the .substring() method to extract part of the string.
//  It starts at index 0 and ends at penceString.length - 1, which removes the last character and
//  outputs all characters except the trailing "p".
//  This returns "399".

// 3.const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
// This takes the value of the penceStringWithoutTrailingP and uses .padStart() method  to always return a minimum 
// length of 3 characters. if the value computed is not a least 3 characters, it outputs leading 0's to make 
// to make the string to 3 characters. If the string is 4 or more characters it just outputs the value without the leading 0's.
// This returns "399". (examples: 45 returns 045, 1295 returns 1295)

// 4.const pounds = paddedPenceNumberString.substring( 0, paddedPenceNumberString.length - 2);
// This takes the value of paddedPenceNumberString and uses the .substring() method to extract the first art of the string.
// It starts at index 0 and ends at paddedPenceNumberString.length - 2, which removes the last two characters.
// This leaves the pounds portion of the value.
// This returns "3". (examples: 45 returns 0, 1295 returns 12)

// 5.const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");
// This takes the variable paddedPenceNumberString and extracts the last two characters using .substring(), 
// which represent the pence. If the string is shorter than 2 characters, .padEnd(2, "0") adds trailing zeros 
// to ensure the pence portion is always 2 digits.
// This returns "99". (examples: 45 returns 45, 1295 returns 95)

// 6. console.log(`£${pounds}.${pence}`);
// console.log() outputs the formatted money value to the console. It uses a template literal (backticks) 
// to embed the variables `pounds` and `pence` directly inside the string using ${} syntax.
// The £ symbol is included at the start, and the dot separates pounds and pence.
// This returns "£3.99" (examples: 45 returns £0.45, 1295 returns £12.95)

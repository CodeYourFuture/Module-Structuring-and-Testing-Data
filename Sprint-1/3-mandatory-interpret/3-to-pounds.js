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
// 1. const penceString = "399p": initializes a string variable with the value "399p"

// 2. Removes the "p" from the end of the string.
//    This gives us just the number part, like "399", 
//    by taking a substring from the start to one character before the end.

// 3. Makes sure the number is at least 3 digits long by adding "0"s at the start if needed.
//    This helps make the splitting into pounds and pence more reliable.  
//    For example, '99' becomes '099' and '399' stays '399'

// 4. Takes the first part of the number (everything except the last 2 digits) 
//     and treats it as pounds.  For example, '399' → '3' or '099' → '0'

// 5.  Gets the last 2 digits to use as pence.
//     If the pence part ends up too short (like "5"), 
//     pad it to be exactly 2 digits ("50").  For example,
//     '399' → '99 or '005' → '05'

// 6.  Prints the final formatted price in pounds and pence.
//     It uses template literals to insert the values inside a string like "£3.99".




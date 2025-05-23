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
// Initializes a string that represents an amount in (pence), ending with a `"p"` to signify pence (e.g., `"399p"` = 399 pence).
 
//2- const penceStringWithoutTrailingP = penceString.substring(0,penceString.length - 1);
    // this Removes the trailing "p" from the string.so it is substring(0, penceString.length - 1) 
    // takes all characters except the last. for example For "399p", this returns "399".


// 3-const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
    // Pads the number with leading zeros to ensure it is at least 3 digits long. so it helps normalise values like "5" → "005" and "99" → "099".

// 4  const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2);
   //  Extracts the pounds from the padded string.so it takes all digits except the last two. 
   //For "399", this gives "3" → meaning 3 pounds.

// 5-const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0"); 
    // Extracts the last two digits for pence and pads them if necessary. 
    // substring(length - 2) takes the final 2 characters.
    // padEnd(2, "0") ensures the pence string is exactly 2 digits. transfer to two-digit formatting for pence 5 => "05".
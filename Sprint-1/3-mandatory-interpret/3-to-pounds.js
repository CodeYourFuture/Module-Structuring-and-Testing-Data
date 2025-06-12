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
// 1. const penceString = "399p": initialises a string variable with the value "399p" using a trailing "p".

// 2. const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1):
// Removes the last character ("p") from the string, leaving just the numeric part: "399".

// 3. const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"):
// Uses 'padStart' to add zeros to the beginning of the string if needed until it reaches a minimum length of 3 characters.
// '3'--> Is the target length for the final string.   
// "0"--> If the original string is already longer than the target length, no padding is added which is why '0' is used here.
// In this case, "399" remains unchanged, but this ensures consistent formatting: "5" becomes "005"

// 4. const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2);:
// Gets the "pounds" part by removing the last two digits (which are pence), "399" becomes "3" pounds.

// 5. const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0"):
//Takes the last two digits of the string to get the pence, and pads with "0" if needed to make it exactly 2 digits: "99" remains unchanged.

// 6. console.log(`£${pounds}.${pence}`):
// Formats and prints the final result in standard pounds and pence resulting in: "£3.99".
const penceString = "399p"; // Initialize a string variable with the value "399p", which represents 399 pence.

// Remove the trailing 'p' from the string
const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1); 
// This line uses the substring method to take all characters from the start up to (but not including) the last character 'p'.
// The result will be "399".

// Pad the pence number string to ensure it has at least 3 digits
const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"); 
// This line ensures that the string has a minimum length of 3 characters, adding leading zeros if necessary.
// For example, "5" would become "005", but "399" stays as "399".

// Extract the pounds part from the padded pence string
const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2); 
// This line takes all characters except the last two, which represent the pence.
// For "399", it results in "3", meaning 3 pounds.

 // Extract the pence part from the padded pence string
const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2) // Get the last two characters, which represent the pence.
  .padEnd(2, "0"); // Ensure that there are always two digits in the pence part, adding a zero if necessary.
// For "399", this gives "99". If it were "5", it would give "05".

// Print the final formatted price in pounds
console.log(`£${pounds}.${pence}`); 
// This line combines pounds and pence into a string formatted as "£3.99".
// It uses template literals to insert the pound and pence values into the string.


// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"

// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

_____________________________________SOLUTION____________________________________________________________________________

// Step-by-Step Breakdown of the Code

//  Original Program
const penceString = "399p"; 
const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1);
const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2);
const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");
console.log(`£${pounds}.${pence}`);

/*
Refactored as a Reusable Function: Now, let’s refactor this into a reusable function called toPounds. 
The function will take a string (e.g., "399p") as input and return the formatted string (e.g., "£3.99").
*/

/**
 * Converts a price in pence (e.g., "399p") to a formatted string in pounds (e.g., "£3.99").
 *
 * @param {string} penceString - The price in pence, represented as a string with a trailing "p".
 * @returns {string} The formatted price in pounds.
 */
function toPounds(penceString) {
    if (!penceString.endsWith("p")) {
      throw new Error("Input must end with 'p'.");
    }
  
    // Step 1: Remove the trailing 'p'
    const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1);
  
    // Step 2: Pad the numeric string to ensure at least 3 digits
    const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
  
    // Step 3: Extract pounds and pence
    const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2);
    const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");
  
    // Step 4: Construct and return the formatted string
    return `£${pounds}.${pence}`;
  }
  
  // Example usage:
  console.log(toPounds("399p"));  // Output: £3.99
  console.log(toPounds("99p"));   // Output: £0.99
  console.log(toPounds("9p"));    // Output: £0.09
  console.log(toPounds("1000p")); // Output: £10.00
  

// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

function toPounds(penceString) {
    // Remove the trailing "p" from the input
    const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1);
  
    // Ensure the pence string has at least three digits by padding
    const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
  
    // Extract the pounds part (everything except the last two digits)
    const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2);
  
    // Extract the pence part (the last two digits) and ensure it's two characters
    const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");
  
    // Return the formatted string
    return `£${pounds}.${pence}`;
  }
  
  // Test cases
  console.log(toPounds("399p")); // Expected: £3.99
  console.log(toPounds("5p"));   // Expected: £0.05
  console.log(toPounds("105p")); // Expected: £1.05
  console.log(toPounds("1200p")); // Expected: £12.00
  console.log(toPounds("0p"));    // Expected: £0.00
  
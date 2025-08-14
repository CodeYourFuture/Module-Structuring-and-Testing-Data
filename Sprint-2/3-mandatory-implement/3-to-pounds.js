// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs
// Function to convert pence string to pounds
function toPounds(penceString) {
    // Remove the trailing "p" from the input string
    const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1);
  
    // Pad the number to ensure it's at least 3 digits
    const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
  
    // Extract the pounds (first part of the string)
    const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2);
  
    // Extract the pence (last two digits), ensuring it's two digits
    const pence = paddedPenceNumberString
      .substring(paddedPenceNumberString.length - 2)
      .padEnd(2, "0");
  
    // Return the formatted result
    return `£${pounds}.${pence}`;
  }
  
  // Test the function with different inputs
  console.log(toPounds("399p")); // Expected output: £3.99
  console.log(toPounds("100p")); // Expected output: £1.00
  console.log(toPounds("25p"));  // Expected output: £0.25
  console.log(toPounds("500p")); // Expected output: £5.00
  
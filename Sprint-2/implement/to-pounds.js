// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

//Answer:
function toPounds(penceString) {
    // Remove the trailing "p"
    const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1);
    
    // Pad the pence string to ensure it has at least 3 digits
    const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
  
    // Extract the pounds and pence from the padded string
    const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2);
    const pence = paddedPenceNumberString
      .substring(paddedPenceNumberString.length - 2)
      .padEnd(2, "0");
  
    // Return the formatted price as a string
    return `£${pounds}.${pence}`;
  }
  
  // Testing the function with different inputs
  console.log(toPounds("399p"));  // Output: "£3.99"
  console.log(toPounds("5p"));    // Output: "£0.05"
  console.log(toPounds("50p"));   // Output: "£0.50"
  console.log(toPounds("100p"));  // Output: "£1.00"
  console.log(toPounds("1050p")); // Output: "£10.50"
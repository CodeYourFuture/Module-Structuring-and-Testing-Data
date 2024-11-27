// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

// Function to convert kilograms to pounds
function toPounds(kg) {
    // 1 kg = 2.20462 pounds
    const pounds = kg * 2.20462;
  
    // Return the result
    return pounds;
  }
  
  // Test cases
  console.log(toPounds(1));    // Expected output: 2.20462
  console.log(toPounds(5));    // Expected output: 11.0231
  console.log(toPounds(100));  // Expected output: 220.462
  console.log(toPounds(0.5));  // Expected output: 1.10231
  console.log(toPounds(75));   // Expected output: 165.3465
  
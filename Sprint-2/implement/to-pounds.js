// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

// Function to convert kilograms to pounds
function toPounds(kilograms) {
  const pounds = kilograms * 2.20462;
  return parseFloat(pounds.toFixed(2)); // Return result with 2 decimal places
}

// Example usage and tests
console.log(toPounds(70));    // Expected output: 2.20
console.log(toPounds(62));    // Expected output: 11.02
console.log(toPounds(76));   // Expected output: 22.05
console.log(toPounds(50));   // Expected output: 33.07
console.log(toPounds(90));   // Expected output: 44.09
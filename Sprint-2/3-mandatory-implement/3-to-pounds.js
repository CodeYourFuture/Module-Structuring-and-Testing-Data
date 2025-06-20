// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

// A function that converts a pence string (like "399p") into a formatted pounds string (like "£3.99")
function toPounds(penceString) {
  const cleanedPence = penceString.slice(0, -1).padStart(3, "0");
  return `£${cleanedPence.slice(0, -2)}.${cleanedPence.slice(-2)}`;
}
// Test the function with different inputs to verify its correctness
console.log(toPounds("5p"));     // Expected Output: £0.05
console.log(toPounds("25p"));    // Expected Output: £0.25
console.log(toPounds("101p"));   // Expected Output: £1.01
console.log(toPounds("399p"));   // Expected Output: £3.99
console.log(toPounds("12345p")); // Expected Output: £123.45 (Testing larger values)

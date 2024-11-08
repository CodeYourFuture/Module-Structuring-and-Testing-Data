// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

function toPounds(kilograms) {
  const pounds = kilograms * 2.20462;
  return pounds;
}

// Test the function with different inputs
console.log(toPounds(1)); // Should print 2.20462
console.log(toPounds(10)); // Should print 22.0462
console.log(toPounds(50)); // Should print 110.231
console.log(toPounds(100)); // Should print 220.462
console.log(toPounds(0)); // Should print 0


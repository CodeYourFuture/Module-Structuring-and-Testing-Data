// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

// Function to convert weight from kilograms to pounds
function toPounds(weightInKg) {
    return weightInKg * 2.20462;  // Conversion formula: 1 kg = 2.20462 pounds
}

// Example usage:
console.log(toPounds(10));  // Output: 22.0462
console.log(toPounds(50));  // Output: 110.231
console.log(toPounds(70));  // Output: 154.324

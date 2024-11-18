// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

// Function to convert pence (in string format) to pounds
function toPounds(penceAmount) {
  // Remove trailing 'p' from the string
  const penceStringWithoutTrailingP = penceAmount.slice(0, -1);

  // Pad the pence number to ensure it has at least 3 digits
  const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");

  // Separate the pounds and pence from the padded string
  const pounds = paddedPenceNumberString.slice(0, -2); // The first digits represent pounds
  const pence = paddedPenceNumberString.slice(-2); // The last two digits represent pence
  
  // Return the formatted pounds and pence
  return `${pounds}.${pence}`;
}

// Test cases with different inputs
console.log(`£${toPounds("9078p")}`); // £90.78
console.log(`£${toPounds("789p")}`);  // £07.89
console.log(`£${toPounds("123p")}`);  // £01.23
console.log(`£${toPounds("1000p")}`); // £10.00

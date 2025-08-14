// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

const penceString = "399p";

function toPounds(penceString) {
  // Remove the trailing "p"
  const penceStringWithoutP = penceString.substring(0, penceString.length - 1);

  // Pad the string so it always has at least 3 digits
  const padded = penceStringWithoutP.padStart(3, "0");

  // Get the pounds part (everything except the last 2 digits)
  const pounds = padded.substring(0, padded.length - 2);

  // Get the pence part (last 2 digits), and pad to make sure it's 2 digits
  const pence = padded.substring(padded.length - 2).padEnd(2, "0");

  // Return the formatted result
  return `£${pounds}.${pence}`;
}

// ✅ Example calls to test the function
console.log(toPounds(penceString));  // £3.99

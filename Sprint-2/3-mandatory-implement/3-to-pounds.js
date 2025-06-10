// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

// A function that converts a pence string (like "399p") into a formatted pounds string (like "£3.99")
function toPounds(penceString) {
  // Remove the trailing 'p' from the input string (e.g., "399p" becomes "399")
  const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1);

  // Ensure the numeric string has at least 3 digits by padding with leading zeros (e.g., "5" becomes "005", "25" becomes "025")
  const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");

  // Extract the pounds part by taking all characters except the last two (which are pence)
  // E.g., for "005", pounds is "0"; for "025", pounds is "0"; for "399", pounds is "3"
  const pounds = paddedPenceNumberString.substring(
    0,
    paddedPenceNumberString.length - 2
  );

  // Extract the pence part by taking the last two characters
  // If for some reason it's shorter than 2 (e.g., from "0" or "00"), pad with trailing zeros to ensure two digits
  // E.g., for "005", pence is "05"; for "025", pence is "25"; for "399", pence is "99"
  const pence = paddedPenceNumberString
    .substring(paddedPenceNumberString.length - 2)
    .padEnd(2, "0"); // padEnd ensures 2 digits, e.g., "5" becomes "50" if needed (though padStart should handle this for common cases)

  // Construct and return the final formatted string (e.g., "£3.99")
  return `£${pounds}.${pence}`;
}

// Test the function with different inputs to verify its correctness
console.log(toPounds("5p"));     // Expected Output: £0.05
console.log(toPounds("25p"));    // Expected Output: £0.25
console.log(toPounds("101p"));   // Expected Output: £1.01
console.log(toPounds("399p"));   // Expected Output: £3.99
console.log(toPounds("12345p")); // Expected Output: £123.45 (Testing larger values)
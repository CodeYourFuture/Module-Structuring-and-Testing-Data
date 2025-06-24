// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs
function toPounds(penceString) {
  // Remove the trailing "p" from the string
  const penceStringWithoutTrailingP = penceString.substring(
    0,
    penceString.length - 1
  );

  // Ensure the number has at least 3 digits by padding from the left with zeros
  const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");

  // Extract the pound portion
  const pounds = paddedPenceNumberString.substring(
    0,
    paddedPenceNumberString.length - 2
  );

  // Extract the pence portion and pad right if needed
  const pence = paddedPenceNumberString
    .substring(paddedPenceNumberString.length - 2)
    .padEnd(2, "0");

  // Return the formatted result
  return `£${pounds}.${pence}`;
}

// Example usage:
console.log(toPounds("399p"));
console.log(toPounds("155p"));
console.log(toPounds("75p"));

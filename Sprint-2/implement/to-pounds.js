// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs
function toPounds(penceString) {
  // Remove the trailing "p" from the input string
  const penceStringWithoutTrailingP = penceString.substring(
    0,
    penceString.length - 1
  );

  // Pad the number to ensure it has at least 3 digits
  const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");

  // Extract the pounds (first part of the number)
  const pounds = paddedPenceNumberString.substring(
    0,
    paddedPenceNumberString.length - 2
  );

  // Extract the pence (last two digits) and ensure it has two digits
  const pence = paddedPenceNumberString
    .substring(paddedPenceNumberString.length - 2)
    .padEnd(2, "0");

  // Return the formatted string as a pounds and pence value
  return `£${pounds}.${pence}`;
}

// Testing the function with different inputs
console.log(toPounds("399p")); // Expected output: £3.99
console.log(toPounds("9p")); // Expected output: £0.09
console.log(toPounds("50p")); // Expected output: £0.50
console.log(toPounds("999p")); // Expected output: £9.99
console.log(toPounds("1234p")); // Expected output: £12.34

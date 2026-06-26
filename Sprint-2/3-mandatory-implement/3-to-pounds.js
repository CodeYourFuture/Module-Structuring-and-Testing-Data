// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

function toPounds(penceString) {
  // 1. Remove the trailing 'p'
  const penceStringWithoutTrailingP = penceString.substring(
    0,
    penceString.length - 1
  );

  // 2. Pad with zeros to ensure we always have at least 3 digits (e.g., "5" becomes "005")
  const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");

  // 3. Extract the pounds (everything except the last two digits)
  const pounds = paddedPenceNumberString.substring(
    0,
    paddedPenceNumberString.length - 2
  );

  // 4. Extract the pence (just the last two digits)
  const pence = paddedPenceNumberString
    .substring(paddedPenceNumberString.length - 2)
    .padEnd(2, "0");

  // 5. Return the formatted currency string
  return `£${pounds}.${pence}`;
}

// --- Test Cases ---
// Calling the function multiple times to check it works for different inputs
console.log(toPounds("399p")); // Expected output: "£3.99"
console.log(toPounds("5p")); // Expected output: "£0.05"
console.log(toPounds("2500p")); // Expected output: "£25.00"
console.log(toPounds("99p")); // Expected output: "£0.99"
console.log(toPounds("10000p")); // Expected output: "£100.00"

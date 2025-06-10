// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

// The function should take a string input representing pence (e.g., "300099p") and convert it to a string representing pounds (e.g., "£3000.99").
function toPounds(penceString) {
  const penceStringWithoutTrailingP = penceString.substring(
    0,
    penceString.length - 1
  );

  // Ensure the input is a valid number and remove any non-numeric characters
  const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
  const pounds = paddedPenceNumberString.substring(
    0,
    paddedPenceNumberString.length - 2
  );
// If the input is less than 100 pence, it will be padded with zeros to ensure correct formatting
  const pence = paddedPenceNumberString
    .substring(paddedPenceNumberString.length - 2)
    .padEnd(2, "0");

  return `£${pounds}.${pence}`;
}
// Test the toPounds function with different inputs
console.log(toPounds("300099p")); // Output: £3000.99
console.log(toPounds("100p")); // Output: £1.00
console.log(toPounds("999p")); // Output: £9.99
console.log(toPounds("123456p")); // Output: £1234.56
console.log(toPounds("500p")); // Output: £5.00
console.log(toPounds("0p")); // Output: £0.00

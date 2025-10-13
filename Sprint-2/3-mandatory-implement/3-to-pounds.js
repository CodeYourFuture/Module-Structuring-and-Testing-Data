// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

function toPounds(penceString) {
  // Convert a string representing an amount in pence (e.g., "123p") to pounds and pence format (e.g., "£1.23")

  const penceStringWithoutTrailingP = penceString.substring(
    0,
    penceString.length - 1
  );

  const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
  const pounds = paddedPenceNumberString.substring(
    0,
    paddedPenceNumberString.length - 2
  );

  const pence = paddedPenceNumberString
    .substring(paddedPenceNumberString.length - 2)
    .padEnd(2, "0");

  return `£${pounds}.${pence}`;
}
console.log(toPounds("5555p")); // This line is inserted only to test the function. It returns "£55.55"
console.log(toPounds("399p")); // This line is inserted only to test the function. It returns "£0.05"
console.log(toPounds("50p")); // This line is inserted only to test the function. It returns "£0.50"
console.log(toPounds("500p")); // This line is inserted only to test the function. It returns "£5.00"

// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

// Function to convert pence string to pounds format
function toPounds(penceString) {
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

// Test the function with inputs
console.log(toPounds("399p"));    // "£3.99"
console.log(toPounds("50p"));     // "£0.50"
console.log(toPounds("5p"));      // "£0.05"
console.log(toPounds("1p"));      // "£0.01"
console.log(toPounds("99p"));     // "£0.99"
console.log(toPounds("100p"));    // "£1.00"
console.log(toPounds("1250p"));   // "£12.50"
console.log(toPounds("10000p"));  // "£100.00"
console.log(toPounds("199p"));    // "£1.99"
console.log(toPounds("2550p"));   // "£25.50"

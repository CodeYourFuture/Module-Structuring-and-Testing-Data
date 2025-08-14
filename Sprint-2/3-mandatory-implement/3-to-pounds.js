// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

function toPounds(penceString) {
  // Remove trailing 'p' and pad with zeros to ensure at least 3 digits
  const pence = penceString
    .substring(0, penceString.length - 1)
    .padStart(3, "0");
  // Get pounds and pence parts
  const pounds = pence.substring(0, pence.length - 2);
  const pencePart = pence.substring(pence.length - 2).padEnd(2, "0");
  // Return formatted string
  return `£${pounds}.${pencePart}`;
}

console.log(toPounds("399p")); // £3.99
console.log(toPounds("9p")); // £0.09
console.log(toPounds("99p")); // £0.99
console.log(toPounds("100p")); // £1.00
console.log(toPounds("1234p")); // £12.34

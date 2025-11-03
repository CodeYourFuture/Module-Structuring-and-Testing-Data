// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

function toPounds(penceString) {
  // normalize input to a trimmed string
  const input = String(penceString).trim();

  // remove trailing 'p' if present
  const numericPart = input.endsWith('p') ? input.slice(0, -1) : input;

  // ensure at least 3 digits so we can safely split into pounds / last two pence
  const padded = numericPart.padStart(3, '0');

  // all but the last two digits are pounds
  const pounds = padded.slice(0, padded.length - 2);

  // last two digits are pence; ensure two chars
  const pence = padded.slice(-2).padEnd(2, '0');

  return `£${pounds}.${pence}`;
}

// Test calls
console.log(toPounds("399p"));   // £3.99
console.log(toPounds("5p"));     // £0.05
console.log(toPounds("75p"));    // £0.75
console.log(toPounds("0p"));     // £0.00
console.log(toPounds("1234p"));  // £12.34
console.log(toPounds(" 42p "));  // £0.42  (works with extra whitespace)
console.log(toPounds("500"));    // £5.00  (works without trailing 'p')

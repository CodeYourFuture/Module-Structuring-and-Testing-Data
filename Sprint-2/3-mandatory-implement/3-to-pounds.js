// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

// Converts a string representing pence (e.g. "399") 
// into pounds.pence format (e.g. "3.99")
// MDN References used:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring

// Converts a pence string (e.g. "399")
function toPounds(penceString) {
  // Ensure the string is atleast 3 characters long by padding with leading zeros if needed
  // e.g. "5" → "005", "99" → "099", "399" stays "399"
  const padded = penceString.padStart(3, "0");
  // Extract everything except the last two digits → this becomes the pounds
  // e.g. "399" → "3"
  const pounds = padded.substring(0, padded.length - 2);
  // Extract the last two digits → this becomes the pence 
  // e.g. "399" → "99"
  const pence = padded.substring(padded.length - 2);
  // Combines pounds and pence into the final money format
  return `${pounds}.${pence}`;
}

console.log(toPounds("399")); // 3.99
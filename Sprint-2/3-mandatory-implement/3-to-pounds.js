// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

// Function to convert pence to pounds
function toPounds(penceString) {
  // Step 1: remove the "p" at the end
  let numberString = penceString.slice(0, -1);

  // Step 2: make sure it has at least 3 digits by adding zeros at the start
  numberString = numberString.padStart(3, "0");

  // Step 3: split into pounds and pence
  let pounds = numberString.slice(0, -2);
  let pence = numberString.slice(-2);

  // Step 4: return formatted string
  return "£" + pounds + "." + pence;
}

console.log(toPounds("399p"));
console.log(toPounds("50p"));
console.log(toPounds("5p"));
console.log(toPounds("1200p"));

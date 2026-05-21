// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

// const penceString = "399p";

// removed the hardcoded penceString and replaced with a parameter
// called penceString
function toPounds(penceString) { // penceString is now a parameter, not
    // a hardcoded variable

// the rest of the code remains unchanged, but it is now inside the
// toPounds function, and it uses the penceString parameter instead
// of the hardcoded variable.
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
  .substring(paddedPenceNumberString.length - 2);

// the old console.log statement is removed and replaced with a return
// stateement that returns the formmated string with the pounds and pence.
    return `£${pounds}.${pence}`;
}

// console.log(`£${pounds}.${pence}`);

// the function toPounds can now be called with different pence strings 
// to test its functionality.
console.log(toPounds("399p")); // £3.99
console.log(toPounds("5p"));   // £0.05
console.log(toPounds("1234p")); // £12.34
 
// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

const penceString = "399p";

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

console.log(`£${pounds}.${pence}`);

// To refactor this code, I will:
// =========> Shorten variable names for readability
// 'penceString' --> 'pStr'
// 'penceStringWithoutTrailingP' --> 'penceWithoutP'
// 'paddedPenceNumberString' --> 'paddedPence'

// =========> Reduce/ remove redundant string methods and properties
// '.substring()' --> .slice() is more versatile, simpler for code trimming and unlike .substring(), doesn't need .length calculation  
// '.length' --> .slice() can count from the end of the string, making .length unnecessary. 
// '.padEnd()' --> Redundant because 'padStart(3)' guarantees enough digits.


function toPounds(pStr) {
    const penceWithoutP = pStr.substring(0,pStr.length - 1);
    const paddedPence = penceWithoutP.padStart(3, "0");
    const pounds = paddedPence.substring(0,paddedPence.length - 2);
    const pence = paddedPence.substring(paddedPence.length - 2).padEnd(2, "0");

    return `£${pounds}.${pence}`

}

// =========> Refactored Code:

function toPounds(pStr) {
    const penceWithoutP = pStr.slice(0, -1);
    const paddedPence = penceWithoutP.padStart(3, "0");
    const pounds = paddedPence.slice(0, -2);
    const pence = paddedPence.slice(-2);

    return `£${pounds}.${pence}`;
}

console.log(toPounds("41586p")); // Output: £415.86

console.log(toPounds("15p")); // Output: £0.15

console.log(toPounds("7813649p")); // Output: £78136.49
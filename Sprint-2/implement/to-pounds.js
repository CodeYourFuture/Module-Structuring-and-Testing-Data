// In Sprint-1, there is a program written in interpret/to-pounds.js

/* Sprint 1 code:
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
*/

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

// My thinking and code starts here

function toPounds(number) {
    let numberString = number.toString();

// Removing the p if there is one
    if (numberString.endsWith("p")) {         
        numberString = numberString.slice(0, -1);
  }  
// Ensures the number has at least 3 characters 
    let paddedPenceNumberString = numberString.padStart(3, "0"); 

// Separating Pounds and pence
    let pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2);
    let pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2) .padEnd(2, "0");
    
  return `£${pounds}.${pence}`;
}

console.log (toPounds("465p"));
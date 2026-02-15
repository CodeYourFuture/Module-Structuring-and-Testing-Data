// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

// Method 1
function toPounds(penceString) {
    const penceStringWithoutP = penceString.substring(0, penceString.length - 1);
    const paddedPenceNumberString = penceStringWithoutP.padStart(3, "0");
    const pound = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2); 
    const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2); 

    return `£${pound}.${pence}`;

}
console.log(toPounds("447p"));  // £4.47



// Method 2
function toPounds(penceString) {
    const value = Number(penceString.slice(0, -1)) / 100;
    return `£${value.toFixed(2)}`
}

console.log(toPounds("447p"));  // £4.47

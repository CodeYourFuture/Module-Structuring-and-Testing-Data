// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

// Method 1
function toPounds(penceString) {
    let penceStringWithoutP = penceString.substring(0, penceString.length - 1);
    let paddedPenceNumberString = penceStringWithoutP.padStart(3, "0");
    let pound = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2); 
    let pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2); 

    return `£${pound}.${pence}`;

}
console.log(toPounds("447p"));  // £4.47



// Method 2
function toPounds(penceString) {
    let value = Number(penceString.slice(0, -1)) / 100;
    return `£${value.toFixed(2)}`
}

console.log(toPounds("447p"));  // £4.47

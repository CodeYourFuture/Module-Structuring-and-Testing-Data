// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs
function toPounds(penceString){
    let penceStringWithoutTrailingP = penceString.substring(0,penceString.length - 1);
    let paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
    let pounds = paddedPenceNumberString.substring(0,paddedPenceNumberString.length - 2);
    const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");
    return `£${pounds}.${pence}`
}

console.log(toPounds("4p"));
console.log(toPounds("75p"));
console.log(toPounds("65445p"));
console.log(toPounds("56045865p"));
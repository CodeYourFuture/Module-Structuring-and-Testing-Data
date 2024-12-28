// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs


function toPounds(penseString) {
    const penceStringWithoutTrailing = penceString.slice(0,penceString.length -1);
    const penceStringFormatCheck = penceStringWithoutTrailing.padStart(3, "0");
    const pound = penceStringFormatCheck.slice(0, penceStringFormatCheck.length -2);
    const pence = penceStringFormatCheck.slice(penceStringFormatCheck.length -2);

    return `£${pound}.${pence}`;
}

console.log(toPounds("123456p"));
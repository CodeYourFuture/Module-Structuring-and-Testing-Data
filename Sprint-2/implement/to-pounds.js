// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs


function toPounds(penseString) {
    const penseStringWithoutTrailing = penseString.slice(0,penseString.length -1);
    const penseStringFormatCheck = penseStringWithoutTrailing.padStart(3, "0");
    const pound = penseStringFormatCheck.slice(0, penseStringFormatCheck.length -2);
    const pense = penseStringFormatCheck.slice(penseStringFormatCheck.length -2);

    return `£${pound}.${pense}`;
}

console.log(toPounds("123456p"));
// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs


function toPound(penceString)
{
    const penceWithoutP=penceString.substring(0,penceString.length-1);
    const paddedPence=penceWithoutP.padStart(3,"0");
    const pound=paddedPence.substring(0,paddedPence.length-2);
    const Pence=paddedPence.substring(paddedPence.length-2);
    return `£${pound}.${Pence}`
}
console.log(toPound("100p"));

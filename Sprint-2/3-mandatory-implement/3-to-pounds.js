// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs
function ConversionPenceToPounds(penceString){
    const penceStringWithoutTrailingP = penceString.substring(0,penceString.length - 1);
    paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
    pounds = paddedPenceNumberString.substring( 0,paddedPenceNumberString.length - 2);
    paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
    pounds = paddedPenceNumberString.substring( 0,paddedPenceNumberString.length - 2);
    const pence = paddedPenceNumberString
    .substring(paddedPenceNumberString.length - 2)
    .padEnd(2, "0");
    const result = `£${pounds}.${pence}`;
    return result;
}
const pencestring1 = ConversionPenceToPounds("663p");
const pencestring2 = ConversionPenceToPounds("98p");
const pencestring3 = ConversionPenceToPounds("986p");
console.log(pencestring1);
console.log(pencestring2);
console.log(pencestring3);
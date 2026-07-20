// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs
function toPounds(penceString){
    const penceStringWithoutTrailingP = penceString.substring(0,penceString.length - 1);
    const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
    const pounds = paddedPenceNumberString.substring( 0,paddedPenceNumberString.length - 2);
    const pence = paddedPenceNumberString
    .substring(paddedPenceNumberString.length - 2)
    .padEnd(2, "0");
    const result = `£${pounds}.${pence}`;
    return result;
}
const penceString1 = toPounds("663p");
const penceString2 = toPounds("98p");
const penceString3 = toPounds("986p");
const penceString4 = toPounds("9p");
const penceString5 = toPounds("15p");
const penceString6 = toPounds("100p");
const penceString7 = toPounds("1p");


console.log(penceString1);
console.log(penceString2);
console.log(penceString3);
console.log(penceString4);
console.log(penceString5);
console.log(penceString6);
console.log(penceString7);
// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs
    /*
const penceStringWithoutTrailingP = penceString.substring(0,penceString.length - 1);
const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"); // pad the string with leading zeros to ensure it has at least 3 characters
const pounds = paddedPenceNumberString.substring(0,paddedPenceNumberString.length - 2); // get the substring representing the pounds by taking all characters except the last two
const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0"); // get the substring representing the pence by taking the last two characters and padding it with a "0" if necessary
console.log(`£${pounds}.${pence}`); //

    */

function toPounds(penceString){
const penceStringWithoutTrailingP = penceString.substring(0,penceString.length - 1);
const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"); // pad the string with leading zeros to ensure it has at least 3 characters
const pounds = paddedPenceNumberString.substring(0,paddedPenceNumberString.length - 2); // get the substring representing the pounds by taking all characters except the last two
const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0"); // get the substring representing the pence by taking the last two characters and padding it with a "0" if necessary

    return `£${pounds}.${pence}`
}
let output1 = toPounds("500p");
let output2 = toPounds("399p");
let output3 = toPounds("2000p");
console.log(`${output1}
${output2}
${output3}`);
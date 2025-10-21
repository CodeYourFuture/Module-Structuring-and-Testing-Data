// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs
// const penceString = "399p";

// const penceStringWithoutTrailingP = penceString.substring(
//   0,
//   penceString.length - 1
// );

// const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
// const pounds = paddedPenceNumberString.substring(
//   0,
//   paddedPenceNumberString.length - 2
// );

// const pence = paddedPenceNumberString
//   .substring(paddedPenceNumberString.length - 2)
//   .padEnd(2, "0");


function toPounds (penceString) {
    const penceStringWithoutTrailingP = penceString.substring(0, penceString.length - 1);
    const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
    const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2);
    const pence = paddedPenceNumberString
      .substring(paddedPenceNumberString.length - 2)
      .padEnd(2, "0");
    return `£${pounds}.${pence}`;
}
console.log(toPounds("399p"));
console.log(toPounds("5p"))
console.log(toPounds("007p")); // leading zeroes handled -> £0.07
// Edge cases and inputs this function does not handle well (demonstration)
// 1) Missing trailing 'p' – the current implementation will drop the last character,
//    so "399" is treated like "39" and becomes £0.39 (not what we want)
console.log(toPounds("399"));

// 2) Different trailing character – the function does not validate the trailing 'p',
//    it simply removes the last character. "399P" still returns £3.99
console.log(toPounds("399P"));

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"
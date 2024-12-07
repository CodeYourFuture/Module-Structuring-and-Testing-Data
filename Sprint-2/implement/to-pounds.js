// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

function toPound(amountInPence){
    // removes p
    const penceStringWithoutTrailingP = amountInPence.substring(0, amountInPence.length - 1);
    // makes sure the length is 3
    const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
    //returns the pounds from the string i.e the first number in the string
    const pounds = paddedPenceNumberString.substring(0, paddedPenceNumberString.length - 2);
    // returns a the pence, i.e the substring(length-2) then pads it with 0 to make sure length is 2
    const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2).padEnd(2, "0");

return (`£${pounds}.${pence}`);
}

// test to check function penceToPound 1digit input
const currentOutput = toPound("30p");
const targetOutput = "£0.30";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);

// test to check function penceToPound 3digit input
const currentOutput1 = toPound("454p");
const targetOutput1 = "£4.54";
console.assert(
  currentOutput1 === targetOutput1,
  `current output: ${currentOutput1}, target output: ${targetOutput1}`
);

// test to check function penceToPound 1digit input
const currentOutput2 = toPound("4p");
const targetOutput2 = "£0.04";
console.assert(
  currentOutput2 === targetOutput2,
  `current output: ${currentOutput2}, target output: ${targetOutput2}`
);

// test to check function penceToPound 0 edge case
const currentOutput3 = toPound("0p");
const targetOutput3 = "£0.00";
console.assert(
  currentOutput3 === targetOutput3,
  `current output: ${currentOutput3}, target output: ${targetOutput3}`
);


// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs


function toPounds(penceCount) {

const penceWithoutP = penceCount.substring(
  0,
  penceCount.length - 1
);

const paddedPenceNumber = penceWithoutP.padStart(3, "0");
const pounds = paddedPenceNumber.substring(
  0,
  paddedPenceNumber.length - 2
);

const pence = paddedPenceNumber
  .substring(paddedPenceNumber.length - 2);


const formattedPounds = pounds || "0";

return `£${formattedPounds}.${pence}`;
}

console.log(`The amount in pounds is ${toPounds("10000000")}`);
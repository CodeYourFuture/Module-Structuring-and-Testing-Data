// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

function toPounds(penceStr) {
  const penceStringWithoutTrailingP = penceStr.substring(
    0,
    penceStr.length - 1
  );

  const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
  const pounds = paddedPenceNumberString.substring(
    0,
    paddedPenceNumberString.length - 2
  );

  const pence = paddedPenceNumberString
    .substring(paddedPenceNumberString.length - 2)
    .padEnd(2, "0");

  return `£${pounds}.${pence}`;
}

console.log(toPounds("1p"));
console.log(toPounds("85p"));
console.log(toPounds("599p"));
console.log(toPounds("3000p"));
console.log(toPounds("987654p"));

const currentOutput = toPounds("1p");
const targetOutput = "£0.01";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`
);

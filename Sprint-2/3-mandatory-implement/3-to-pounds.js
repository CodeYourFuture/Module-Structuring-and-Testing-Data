// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

function toPounds(penceString) {
  const penceStringWithoutTrailingP = penceString.substring(
    0,
    penceString.length - 1
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

console.log(toPounds("399p"));

const actualOutput = toPounds("4685p");
const expectedOutput = "£46.85";

console.assert(
  actualOutput === expectedOutput,
  `expected to get ${expectedOutput}, but got ${actualOutput}`
);

const actualOutput1 = toPounds("123456p");
const expectedOutput1 = "£1234.56";

console.assert(
  actualOutput1 === expectedOutput1,
  `expected to get ${expectedOutput1}, but got ${actualOutput1}`
);

const actualOutput2 = toPounds("4p");
const expectedOutput2 = "£0.04";

console.assert(
  actualOutput2 === expectedOutput2,
  `expected to get ${expectedOutput2}, but got ${actualOutput2}`
);

// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

/* Code from Sprint-1 below for reference
const penceString = "399p";

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

console.log(`£${pounds}.${pence}`);
*/

function toPounds(penceString) {
  if (typeof penceString !== "string" || !penceString.endsWith("p")) {
    console.log("Invalid input, please provide a penceString ending with 'p'");
    return "Invalid input, please provide a penceString ending with 'p'";
  }

  const penceStringWithoutTrailingP = penceString.substring(
    0,
    penceString.length - 1
  );

  if (Number.isNaN(Number(penceStringWithoutTrailingP))) {
    console.log("Invalid input, please provide a numeric penceString");
    return "Invalid input, please provide a numeric penceString";
  }

  const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
  const pounds = paddedPenceNumberString.substring(
    0,
    paddedPenceNumberString.length - 2
  );

  const pence = paddedPenceNumberString
    .substring(paddedPenceNumberString.length - 2)
    .padEnd(2, "0");

  console.log(`£${pounds}.${pence}`);
  return `£${pounds}.${pence}`;
}

toPounds("399p");
toPounds("5p");
toPounds("89p");
toPounds("1234p");
toPounds("0p");
toPounds("70000p");
toPounds("abcp");
toPounds(500);
toPounds("abc");

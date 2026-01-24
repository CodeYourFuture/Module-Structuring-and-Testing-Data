// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

function toPounds(penceStringWithP) {
  const penceStringWithoutTrailingP = penceStringWithP.substring(
    0,
    penceStringWithP.length - 1
  );
  const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
  const pounds = paddedPenceNumberString.substring(
    0,
    paddedPenceNumberString.length - 2
  );

  const pence = paddedPenceNumberString
    .substring(paddedPenceNumberString.length - 2)
    .padEnd(2, "0");

  return "£" + pounds + "." + pence;
}

console.log(toPounds("50p")); // Exp: £0.50, Acc: £0.50
console.log(toPounds("399p")); // Exp: £3.99, Acc: £3.99
console.log(toPounds("5p")); // Exp: £0.05, Acc: £0.05
console.log(toPounds("12345p")); // Exp: £123.45, Acc: £123.45

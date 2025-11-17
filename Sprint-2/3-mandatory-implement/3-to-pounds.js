// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

function toPounds(penceStr) {
  const penceStrWithoutTrailingP = penceStr.substring(0, penceStr.length - 1);
  const paddedPenceNumberString = penceStrWithoutTrailingP.padStart(3, "0");
  const pounds = paddedPenceNumberString.substring(
    0,
    paddedPenceNumberString.length - 2
  );
  const pence = paddedPenceNumberString
    .substring(paddedPenceNumberString.length - 2)
    .padEnd(2, "0");

  return `£${pounds}.${pence}`;
}

console.log(toPounds("123p")); // £1.23
console.log(toPounds("1002p")); // £10.02
console.log(toPounds("0p")); // £0.00
console.log(toPounds("99p")); // £0.99
console.log(toPounds("250p")); // £2.50
console.log(toPounds("7p")); // £0.07
console.log(toPounds("48p")); // £0.48
console.log(toPounds("53647868p")); // £536478.68

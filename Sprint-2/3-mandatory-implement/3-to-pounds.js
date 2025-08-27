// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

function penceToPounds(penceString) {
  //takes pence value in string and returns as '£pounds.pence'
  const penceStringWithoutTrailingP = penceString.substring(
    0,
    penceString.length - 1
  );

  const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
  const pounds = paddedPenceNumberString.substring(
    0,
    paddedPenceNumberString.length - 2
  );

  const pence = paddedPenceNumberString.substring(
    paddedPenceNumberString.length - 2
  );

  return `£${pounds}.${pence}`;
}

console.log(penceToPounds("599p"));
console.log(penceToPounds("59999p"));
console.log(penceToPounds("6p")); // padding test
console.log(penceToPounds("10p"));
console.log(penceToPounds("99p"));
console.log(penceToPounds("0p")); // range test

// test complete

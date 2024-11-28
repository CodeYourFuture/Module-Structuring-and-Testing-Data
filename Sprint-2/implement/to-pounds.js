// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

function toPounds(penseString) {
  const penceStringWithoutTrailingP = penseString.slice(
    0,
    penseString.length - 1
  );
  const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
  const pounds = paddedPenceNumberString.slice(
    0,
    paddedPenceNumberString.length - 2
  );

  const pense = paddedPenceNumberString.slice(
    paddedPenceNumberString.length - 2
  );
  return `£${pounds}.${pense}`;
}

console.log(toPounds("100p"));

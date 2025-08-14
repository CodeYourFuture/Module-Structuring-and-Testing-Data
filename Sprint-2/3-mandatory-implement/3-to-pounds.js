// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

function toPound(penceDigits) {
  //initialises a constant variable with the value penceDigits
  const penceString = penceDigits;
  // removes the last element from the string using subString()
  const penceStringWithoutTrailingP = penceString.substring(
    0,
    penceString.length - 1
  );
  //returns 399 because the targetLength 3 is equivalent to the length of the string. So no "0" padding will be added.
  const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
  //removing the last 2 digit of 399
  const pounds = paddedPenceNumberString.substring(
    0,
    paddedPenceNumberString.length - 2
  );
  // returns 99 given that the padding starts at end and it's length is 2.
  const pence = paddedPenceNumberString
    .substring(paddedPenceNumberString.length - 2)
    .padEnd(2, "0");
  //returns the value of pound and pence. Appends the £ at the start.
  return `£${pounds}.${pence}`;
}


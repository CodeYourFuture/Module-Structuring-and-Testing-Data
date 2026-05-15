// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

function calculateBMI(penceString) {  

  // remove last character
  const penceStringWithoutTrailingP = penceString.substring(
    0,
    penceString.length - 1
  );

  // pad to the length of three
  const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");

  // remove the last two characters
  const pounds = paddedPenceNumberString.substring(
    0,
    paddedPenceNumberString.length - 2
  );

  // get last two characters and pad to two if needed
  const pence = paddedPenceNumberString
    .substring(paddedPenceNumberString.length - 2)
    .padEnd(2, "0");

  console.log(`£${pounds}.${pence}`);
  
}

console.log(calculateBMI("456p"))
console.log(calculateBMI("545747p"))
console.log(calculateBMI("1p"))

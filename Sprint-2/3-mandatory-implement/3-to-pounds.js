// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

function toPounds(penceToPound) {
  const penceStringWithoutTrailingP = penceToPound.substring(0, penceToPound.length - 1); // Remove the P at the end.
  const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"); // Make sure there 3 digits at least.
  const pounds = paddedPenceNumberString.substring(
    0,
    paddedPenceNumberString.length - 2
  ); // get the pounds part( - the last two digits).
  const pence = paddedPenceNumberString
    .substring(paddedPenceNumberString.length - 2)
    .padEnd(2, "0"); // get the pence part( they should be 2 digits).
  return `£${pounds}.${pence}`; // The final format.
}
console.log(toPounds("3990p"));
console.log(toPounds("1500p"));
console.log(toPounds("150p"));
console.log(toPounds("100p"));
console.log(toPounds("70p"));
console.log(toPounds("50p"));
console.log(toPounds("0p"));
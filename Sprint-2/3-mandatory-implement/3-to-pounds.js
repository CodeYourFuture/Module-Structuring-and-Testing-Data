// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs
function toPounds(penceString) {
  let penceStringWithoutTrailingP = penceString.replace( /[^1-9]/g, ""); //39772
  const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"); //39772
  const pounds = paddedPenceNumberString.substring( 0, paddedPenceNumberString.length - 2 ); // 397
  const pence = paddedPenceNumberString.substring(paddedPenceNumberString.length - 2)
.padEnd(2, "0"); // 72
  return `£${pounds}.${pence}`; // 397.72

}
console.log(toPounds("397d72p"));
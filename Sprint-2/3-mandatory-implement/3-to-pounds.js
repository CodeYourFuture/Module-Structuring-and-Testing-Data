// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

function toPounds(str)
{   
// 1. const penceString = "399p": initialises a string variable with the value "399p"
const penceStringWithoutTrailingP = str.substring(
  0,
  str.length - 1
);

//2. removes "P" from the string
const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
//3. Ensures the string is at least 3 characters long by adding 0 to the start
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);

//4. Extracts everything except the last 2 digits of paddedPenceNumberString
const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");
  return pence
}
//5. takes the last 2 digits as the pence from paddedPenceNumberStringCollapse comment
console.log(toPounds("399p"))
console.log(toPounds("400p"))
console.log(toPounds("301p"))
console.log(toPounds("302p"))
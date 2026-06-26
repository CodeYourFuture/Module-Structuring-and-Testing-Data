// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs
function toPounds(penceString) {
  const penceStringWithoutTrailingP = penceString.substring(
    0,
    penceString.length - 1
  ); //variable
  //  "penceStringWithoutTrailingP" declared and assigned first three characters
  //  of "penceString" using the substring method, removing the trailing "p".

  const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
  // variable "paddedPenceNumberString" declared and assigned the value of "penceStringWithoutTrailingP"
  // padded to a minimum length of 3 characters with leading zeros using the padStart method. Which is clever way,
  // really to replace it with zeros if number of pence is less than 3 characters long.

  const pounds = paddedPenceNumberString.substring(
    0,
    paddedPenceNumberString.length - 2
  );
  //Variable "pounds" declared and assigned value of "paddedPenceNumberString" but without the last
  // two characters.

  const pence = paddedPenceNumberString
    .substring(paddedPenceNumberString.length - 2)
    .padEnd(2, "0");
  // Variable "pence" declared and assigned value of the last two characters of "paddedPenceNumberString"
  // and padded to a minimum length of 2 characters with zeros at the end, padEnd method is used once again.
  // it is to ensure that if the number of pence is less than 2 characters long, it will be padded with zeros
  // at the end.

  return `£${pounds}.${pence}`;
  // Finally equivalent in "pounds" and "pence" is returned
}
console.log(toPounds("2345")); // testing with normal string of numbers
console.log(toPounds("-2345")); // testing with string of negative numbers
console.log(toPounds("0")); // testing with zero

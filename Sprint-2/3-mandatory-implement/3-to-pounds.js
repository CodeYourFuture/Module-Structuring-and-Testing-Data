// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs
function to_pound(PenceNumber) {
  const penceString = PenceNumber;

  const penceStringWithoutTrailingP = penceString.substring(
    0,
    penceString.length - 1
  );

  const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
  const pounds = paddedPenceNumberString.substring(
    0,
    paddedPenceNumberString.length - 2
  );

  const pence = paddedPenceNumberString
    .substring(paddedPenceNumberString.length - 2)
    .padEnd(2, "0");

  return `£${pounds}.${pence}`;
}
console.log(to_pound("399p")); // Output: £3.99
console.log(to_pound("100p")); // Output: £1.00
console.log(to_pound("50p")); // Output: £0.50
console.log(to_pound("1p")); // Output: £0.01
console.log(to_pound("999p")); // Output: £9.99
console.log(to_pound("0p")); // Output: £0.00

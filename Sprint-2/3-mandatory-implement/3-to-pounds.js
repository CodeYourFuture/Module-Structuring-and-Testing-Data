// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.
function toPounds(penceString) {
  const penceStringWithoutTrailingP = penceString.slice(0, -1); 
  const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");

  const pounds = paddedPenceNumberString.slice(0, -2);
  const pence = paddedPenceNumberString.slice(-2).padEnd(2, "0");

  return `£${pounds}.${pence}`;
}
// You should call this function a number of times to check it works for different inputs
   
// Test calls:
// The code "console.log(toPounds("399p"));" shows the price of £3.99.
// The code "console.log(toPounds("50p"));" shows that the amount is £0.50.
// The console.log function displays the value "4p" (which is equivalent to £0.04).
// The code "console.log(toPounds("1234p"));" shows the price of £12.34.
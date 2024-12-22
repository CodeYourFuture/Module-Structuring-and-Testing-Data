// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

/*function toPounds(penceString) {
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
}
const penceString = "399p";
console.log(`£${pounds}.${pence}`);*/

function toPounds(penceString) {
  const penceStringWithoutTrailingP = penceString.substring(
    0,
    penceString.length - 1
  ); // Remove the "p"

  const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"); // make sure  number string has at least 3 digits

  const pounds = paddedPenceNumberString.substring(
    0,
    paddedPenceNumberString.length - 2
  ); // Extract pounds and pence

  const pence = paddedPenceNumberString
    .substring(paddedPenceNumberString.length - 2)
    .padEnd(2, "0");

  return `£${pounds}.${pence}`;
} // Return the formatted string

const result1 = toPounds("799p");
const result2 = toPounds("50p");
const result3 = toPounds("5230p");
const result4 = toPounds("545p");
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);

gisdellabella@Giss-MBP implement % node to-pounds.js 
£7.99
£0.50
£52.30
£5.45
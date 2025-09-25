// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs


function toPounds(penceString) {
const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1 // to remove the trailing 'p'
);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2 // all but the last two characters
);

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)  // the last two characters
  .padEnd(2, "0");  // in case there is only one character of pence

return `£${pounds}.${pence}`;
}

console.log(toPounds("399p")); // should log "£3.99"
console.log(toPounds("5p")); // should log "£0.05"
console.log(toPounds("89p")); // should log "£0.89"
console.log(toPounds("123456p")); // should log "£1234.56"
// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

function toPounds(pence) {
  pence = pence.toString();
  if (pence.endsWith("p")) {
    pence = pence.slice(0, -1);
  }
  const paddedPenceNumberString = pence.padStart(3, "0");
  pence = paddedPenceNumberString.slice(-2);
  const pounds = paddedPenceNumberString.slice(0, -2);
  return `£${pounds}.${pence}`;
}

console.log(toPounds(567));

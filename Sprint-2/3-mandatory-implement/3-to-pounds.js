// In Sprint-1, there is a program written in interpret/to-pounds.js
// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.
// You should call this function a number of times to check it works for different inputs

function toPounds(penceString) {
  penceString = String(penceString); // ensures input is treated as a string even if number is inputted
  // const penceStringWithoutTrailingP = penceString.substring(
  let penceStringWithoutTrailingP = penceString;
  if (penceString.endsWith("p")) {
    penceStringWithoutTrailingP = penceString.substring(
      0,
      penceString.length - 1
    );
  } // This prevents the last characters from being sliced off if there is no p.

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
console.log(toPounds("481p"));
console.log(toPounds("50p"));
console.log(toPounds("5p"));
console.log(toPounds("0p"));
console.log(toPounds("12345p"));
console.log(toPounds("9")); // edge case: missing 'p' at the end, returns 0 rather than error because last character is sliced off
// Can be fixed by changing line 8
console.log(toPounds("abc")); // Works but returns nonsense value
console.log(toPounds(123)); // Works with number input because of line 7 converting to string

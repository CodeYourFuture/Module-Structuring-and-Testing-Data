// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

//-------------------------------------------------------------------

function toPounds(pence) {
  const penceValue = pence.slice(0, -1).padStart(3, "0");
  return `£${penceValue.slice(0, -2)}.${penceValue.slice(-2)}`;
}

console.log(toPounds("90p"));

let penceArray = [
  ["399p", "£3.99"],
  ["9p", "£0.09"],
  ["50p", "£0.50"],
  ["1002p", "£10.02"],
  ["1900p", "£19.00"],
];
for (const [input, expectedOutput] of penceArray) {
  const currentOutput = toPounds(input);
  console.assert(
    currentOutput === expectedOutput,
    `Current output is ${currentOutput}. Expected outout is ${expectedOutput}`
  );
}

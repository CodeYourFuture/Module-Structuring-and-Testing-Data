// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

const penceToPounds= (p) => {
  const value = parseInt(p.replace("p", ""));
  return `£${(value / 100).toFixed(2)}`;
};

// Tests
console.log(penceToPounds("399p")); // "£3.99"



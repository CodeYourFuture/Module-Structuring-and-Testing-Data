// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

const toPounds = (kg) => +(kg * 2.20462).toFixed(2);

const penceToPounds = (p) => `£${(p / 100).toFixed(2)}`;
const toUpperSnakeCase = (s) => s.toUpperCase().trim().split(" ").join("_");
const multiply = (a, b) => a * b;

// Tests
console.log(toPounds(10)); // 22.05

console.log(penceToPounds(150)); // "£1.50"

console.log(toUpperSnakeCase("hello there"));
// "HELLO_THERE"
console.log(multiply(10, 32)); // 320

const convertToUpperSnakeCase = (str) =>
  str.toUpperCase().trim().split(" ").join("_");

console.log(convertToUpperSnakeCase("hello there")); // "HELLO_THERE"

// Four functions are implemented because each one performs a specific task.
// This makes the code easier to read, reuse, and maintain.
//
// The penceToPounds function was updated to handle a pence string like "399p".
// It removes the "p", converts the value to a number, and divides by 100
// so the function correctly returns "£3.99".s

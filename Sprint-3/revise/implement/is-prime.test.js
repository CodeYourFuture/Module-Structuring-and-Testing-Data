// Given a positive integer num,
// When the isPrime function is called with num as input,

const { default: test } = require("node:test");
const { hasUncaughtExceptionCaptureCallback } = require("process");

// Then it should check if the num is prime
function isPrime(num) {
  if (num <= 1) return "False";
  if (num === 2) return "True";
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) {
      return "False";
    }
  }
  return "True";
}

test("It tests if a number is prime or not,if yes it will return `True`", () => {
  hasUncaughtExceptionCaptureCallback();
});
console.log(isPrime(17));

// Given a positive integer num,
// When the isPrime function is called with num as input,

//const { default: test } = require("node:test");
//const { hasUncaughtExceptionCaptureCallback } = require("process");

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

test("Numbers less than or equal to 1 are not accepted", () => {
  expect(isPrime(-4)).toBe("False");
  expect(isPrime(0)).toBe("False");
  expect(isPrime(1)).toBe("False");
});
test("2 is a prime number", () => {
  expect(isPrime(2)).toBe("True");
});
test("number is prime", () => {
  expect(isPrime(17)).toBe("True");
  expect(isPrime(1033)).toBe("True");
  expect(isPrime(3911)).toBe("True");
});
test("Number is not prime", () => {
  expect(isPrime(6)).toBe("False");
  expect(isPrime(65480)).toBe("False");
  expect(isPrime(3309785)).toBe("False");
});

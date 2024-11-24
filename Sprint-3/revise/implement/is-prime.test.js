

const isPrime = require("./is-prime");

test("check if 7 is a prime number", () => {
  const input = 7;
  const output = isPrime(input); 
  expect(output).toBe(true); // Expected: true, because 7 is prime
});


test("check if 17 is a prime number", () => {
  const input = 17;
  const output = isPrime(input); // Correct function call
  expect(output).toBe(true); // Expected: true, because 17 is prime
});

test("check if 1 is not a prime number", () => {
  const input = 1;
  const output = isPrime(input); // Correct function call
  expect(output).toBe(false); // Expected: false, because 1 is not prime
});
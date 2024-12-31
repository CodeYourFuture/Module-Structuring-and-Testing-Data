// is-prime.test.js
const isPrime = require("./isPrime");

function assertEquals(actualOutput, targetOutput) {
  console.assert(
    actualOutput === targetOutput,
    `Expected ${actualOutput} to equal ${targetOutput}`
  );
}

describe("isPrime Function Tests", () => {
  test("Handles prime number 7", () => {
    const result = isPrime(7);
    assertEquals(result, true);
  });

  test("Handles non-prime number 10", () => {
    const result = isPrime(10);
    assertEquals(result, false);
  });

  test("Handles edge case number 1", () => {
    const result = isPrime(1);
    assertEquals(result, false);
  });

  test("Handles a prime edge case number 2", () => {
    const result = isPrime(2);
    assertEquals(result, true);
  });

  test("Handles larger prime number 29", () => {
    const result = isPrime(29);
    assertEquals(result, true);
  });
});

console.log("All test cases executed!");

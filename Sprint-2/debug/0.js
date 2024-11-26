function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// Explanation:
// The `multiply` function takes two parameters, `a` and `b`, and returns their product (`a * b`).
// When `console.log` calls `multiply(10, 32)`, it passes `10` as `a` and `32` as `b`.
// Inside `multiply`, the function calculates `10 * 32`, which is `320`, and returns this value.
// The `console.log` statement then inserts `320` into the string,
// so the output is: "The result of multiplying 10 and 32 is 320".

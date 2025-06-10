// Predict and explain first...

// =============> write your prediction here
// I predict that the output will be unexpected because the function multiply logs the result but does not return anything.
// When called inside the template literal, it will print undefined because multiply does not return a value.

function multiply(a, b) {
  console.log(a * b); // This line prints the product directly to the console
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`); // This line uses the *return value* of multiply

// =============> write your explanation here
// Explanation:
// The `multiply` function uses `console.log(a * b)` to print the product (320) directly to the console when it is called.
// However, since the `multiply` function does not have an explicit `return` statement, it implicitly returns `undefined`.
// Therefore, when `multiply(10, 32)` is called within the template literal `${multiply(10, 32)}`,
// the value substituted into the string is `undefined`.
// This results in two separate outputs: first, "320" (from the `console.log` inside the function),
// and then "The result of multiplying 10 and 32 is undefined" (from the outer `console.log`).

// Finally, correct the code to fix the problem
//  =============> write your new code here

// Fixed Code:
function multiply(a, b) {
  return a * b;  // Return the product instead of logging it
}

// Now, multiply(10, 32) will return 320, and that value will be correctly inserted into the template literal.
console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`); // This will now correctly log "The result of multiplying 10 and 32 is 320"
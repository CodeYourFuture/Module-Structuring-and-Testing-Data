// Predict and explain first...
// =============> write your prediction here

// I predict that the code would fail because "console.log" was misplaced and
// also because console.log doesnt return an value to use elsewhere.


// =============> write your explanation here

// console.log only prints to the console — it returns undefined.
// Since the template literal needs an actual value, the function
// must use "return" instead of relying on console.log.

//  =============> write your new code here
function multiply(a, b) {
  let result = a * b;
  return result;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
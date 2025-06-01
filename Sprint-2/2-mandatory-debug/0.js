// Predict and explain first...
// =============> write your explanation here

/*The multiply function does not return any value; it only logs the result using console.log(). As a result, when it's called inside the template literal, it evaluates to undefined. This means the final output will be:
"The result of multiplying 10 and 32 is undefined"
If we want to use the result in a template literal or assign it to a variable, the function should use return instead of console.log.*/

// Finally, correct the code to fix the problem
//  =============> write your new code here

function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// Predict and explain first...

// =============> write your prediction here
// I predict the code will give an error because the multiply function does not return a value.

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
//The function multiply(a, b) logs the result but does not return anything.
// The function multiply(a, b) prints the result using console.log(a * b), but it does not return a value. When multiply(10, 32) is called inside the template literal, it first prints 320 to the console. Then, because the function has no return statement, it returns undefined. As a result, the second console.log prints:

//The result of multiplying 10 and 32 is undefined

//This happens because console.log() only displays a value on the screen, while return sends a value back to where the function was called
// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

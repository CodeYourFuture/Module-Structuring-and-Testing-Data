// Predict and explain first...

// =============> write your prediction here
// I predict that there will be error because the function will not return anything 
// and when we try to log the result of the function call to the console, it will return undefined.

// function multiply(a, b) {
//   console.log(a * b);
// }

// console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
// The function multiply logs in the result of a * b to the console but does not return anything, 
// so when we try to log the result of the function call to the console, it will return undefined.

// Finally, correct the code to fix the problem
//  =============> write your new code here

function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// Predict and explain first...

// =============> write your prediction here
// I am getting two result from the below function as there are two 'console.log'. 
// First result: 320
// Second result: The result of multiplying 10 and 32 is undefined.

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
// The console.log(s) are not related to the function as the function did not return any value.

// Finally, correct the code to fix the problem
//  =============> write your new code here

function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// Predict and explain first...

// =============> write your prediction here
// The output of the code will be: undefined.

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
// The function multiply takes two arguments, a and b, and logs their product to 
// the console. However, it does not return any value, which means that when we 
// call multiply(10, 32) inside the template literal, it will return undefined. 
// Therefore, the output of the console.log statement will be: "The result of 
// multiplying 10 and 32 is undefined".

// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);  
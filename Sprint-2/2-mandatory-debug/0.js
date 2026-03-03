// Predict and explain first...

// =============> write your prediction here
// The function multiply does not return anything, it only logs the result to the console.
// Therefore the outcome of the final console.log will be undefined


function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
// The function multiply does not return a value, it only logs the result to the console.
// Therefore on using the template literal to write the result of the function, it doesn't 
// have one and renders "undefined" instead


// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
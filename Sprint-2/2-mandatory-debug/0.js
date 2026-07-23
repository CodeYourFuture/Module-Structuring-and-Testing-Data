// Predict and explain first...

// I think the code will not give an error, but it will print
// "The result of multiplying 10 and 32 is undefined" because
// the function only logs the answer and does not return a value.


function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here

// The problem is that the multiply function uses console.log()
// instead of returning the result. When a function does not
// return anything, JavaScript gives it the value undefined.

// Finally, correct the code to fix the problem

function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
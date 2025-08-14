// Predict and explain first...

// =============> write your prediction here

// I think the error will probably be because the function is not followed by a return statement.

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here

// The message printed is "The result of multiplying 10 and 32 is undefined". As the function multiply does not have a return statement, console.log cannot print the result of the multiplication.
// To allow the function to return the result of the multiplication, we need to add a return statement inside the function.

// Finally, correct the code to fix the problem
//  =============> write your new code here

function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

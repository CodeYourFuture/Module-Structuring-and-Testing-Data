// Predict and explain first...

// =============> write your prediction here
// I predict that the output will be unexpected because the function multiply logs the result but does not return anything.
// When called inside the template literal, it will print undefined because multiply does not return a value.


function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
// The function multiply uses console.log to print the product, but since it does not return the product,
// the expression `${multiply(10, 32)}` evaluates to undefined, so the final output string will contain 'undefined'.
// This means the actual multiplication result is printed separately, then the template literal prints 'undefined'.


// Finally, correct the code to fix the problem
//  =============> write your new code here

function multiply(a, b) {
  return a * b;  // Return the product instead of logging it
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// Predict and explain first...

// =============> write your prediction here

// The code will print undefined because the multiply sign logs the result, but doesn't return anything.


function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here


//The multiply functon logs the result but doesn't return it, and so using it in the code will make it print undefined as no value is returned. Adding a return fixes the error



// Finally, correct the code to fix the problem
//  =============> write your new code here

function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
// Predict and explain first...
//  =============> The function won't return the sum of a and b because the return is between the
//  return statement and the expression a + b.
function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============>  returns undefined because the empty return tells the function to return nothing, so the function returns undefined.

// Finally, correct the code to fix the problem
  function sum(a, b) { 
     return a + b;
    }
     
  console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
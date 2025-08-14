// Predict and explain first...

// =============> write your prediction here

/* The code will will log a * b.  But the function will not return anything. The console.log outside the function will return 
"`The result of multiplying 10 and 32 is undefined. */

/*function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);*/

// =============> write your explanation here

//this is because the function was not called, supposed to say return a*b inside the function because console.log will only log the a*b to the console.

// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

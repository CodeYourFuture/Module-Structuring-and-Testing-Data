// Predict and explain first...
// There isn't an actual variable inside the function returning any variable with values

// =============> write your prediction here===> The function will print the multiplication to the terminal 
// but will not create any variable(s) to hold the operands or result of the multiplication. 

/* function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`); */

// =============> write your explanation here====> It printed "undefined" in the space of the literal function
// because the function doesn't return anything. The return keyword has to be used within a function.

// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

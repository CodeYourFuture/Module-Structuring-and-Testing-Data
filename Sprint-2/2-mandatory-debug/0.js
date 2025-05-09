// Predict and explain first...
/*The multiply function uses only console.log:

It prints the product a * b to the screen, but does not return that value.
Without return, calling multiply(10, 32) returns undefined.*/
// =============> write your prediction here

/*function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);*/

// =============> write your explanation here
//We added return statement to the function


// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
  return (a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
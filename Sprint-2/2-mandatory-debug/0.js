// Predict and explain first...
// I expect the code to log the results of multiplying 10 and 32 but in line 10 i expect it to return undefined because the function "multiply" does not have a return statement.

// =============> write your prediction here
/*
function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
*/
// =============> write your explanation here
// The code defines a function "multiply" that takes two parameters "a" and "b" and logs their product to the console. However, it does not return any value from the function.
// The function `multiply` is called with arguments 10 and 32, but since it does not return a value, the template literal will log "undefined" for the result of the multiplication.
// and to fix this, the function should return the product instead of just logging it.


// Finally, correct the code to fix the problem
//  =============> write your new code here

function multiply(a, b){
  return a * b; // Return the product instead of logging it
}
console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`); // now this will log the correct results
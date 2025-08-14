// Predict and explain first...
/*the function called inside of function */
// =============> write your prediction here
/*this function does not return a value */
function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
/* function should call out side of function
the function should retutn a value when we called out side of function*/ 
// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
  return a * b; 
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
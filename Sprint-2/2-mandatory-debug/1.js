// Predict and explain first...
//  =============> write your prediction here
// The function sum when is call inside the string template. The print out will be "The sum of 10 and 32 is undefined".
/*
function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
*/
// =============> write your explanation here

/*
For the function sum the writing format is correct but however instead of return the expression from the combine value 
of a and b, right now there is no expression return back to the function. So when the function is used inside the string template, 
it give the value of undefined instead of actual  value of a and b combine together.
*/

// Finally, correct the code to fix the problem
//  =============> write your new code here

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
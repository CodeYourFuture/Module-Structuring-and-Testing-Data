// Predict and explain first...
//  =============> write your prediction here
// =============explanation==========
// I think will either give error, or no result at all as there is  a ";" semicolon after
//  the return statement and the actual calculation is not assigned to anything.
function sum(a, b) {
  return;
   a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
//==============Explanation===============
//To fix the code the ";" must be removed, and the calculation 
//needs to be placed next to the "return"
// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

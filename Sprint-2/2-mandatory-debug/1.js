// Predict and explain first...
//  =============> write your prediction here
// I predict the program will print "The sum of 10 and 32 is underfined"
// becouse the return statment does not return a value and the addition
// is written on the next line.

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
// The problem is that the return us written on its own line.
// Becouse of this, the function returns undefined before executing a + b.
// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a,b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
// Predict and explain first...
//  =============> write your prediction here
// we'll get a syntax error because function isn't returning anything, a+b is undefined 
function sum(a, b) {
  return; // invalid code block as compiler can't read anything after return keyword
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
// the function sum is undefined because it doesn't return any value to be used globally 

// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
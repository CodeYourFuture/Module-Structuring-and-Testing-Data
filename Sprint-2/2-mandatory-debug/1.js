// Predict and explain first...
//  =============> write your prediction here
// the result would be: the sum of 10 and 32 is undefined.
function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
// the function is defined with the name "sum" there is no return for anything. And if we want to print the result
// it would be: the sum of 10 and 32 is undefined and what we are actually looking for is 42.
// Finally, correct the code to fix the problem
//  =============> write your new code here

function sum(a, b){
  return(a+b);
}
console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

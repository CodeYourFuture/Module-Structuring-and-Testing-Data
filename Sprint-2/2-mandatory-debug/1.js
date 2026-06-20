// Predict and explain first...
//  =============> write your prediction here
//I think this code will not give correct output, it will give undefined.

/*function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);*/

// =============> write your explanation here
/*This code will print undefined because return; stops the function immediately.
 The line a + b is never executed, so the function returns undefined and the template 
 string receives undefined instead of the sum.*/

// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return a + b;
}
console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

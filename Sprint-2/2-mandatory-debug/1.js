// Predict and explain first...
//  =============> write your prediction here
//The function will always return undefined, and the final output will be:
//The sum of 10 and 32 is undefined
//This happens because the function has a return; statement before the a + b expression, causing an early exit from the function without returning anything.


function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
//The return statement on its own line causes the function to return immediately, meaning a + b; is never executed.
//In JavaScript, a return statement without a value implicitly returns undefined.
//Because sum(10, 32) returns undefined, the results in:
//The sum of 10 and 32 is undefined

// Finally, correct the code to fix the problem
//  =============> write your new code here
//function sum(a, b) {
 // return a + b;
//}


//console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);


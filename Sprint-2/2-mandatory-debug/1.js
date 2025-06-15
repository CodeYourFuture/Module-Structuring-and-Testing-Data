// Predict and explain first...
//  =============> write your prediction here
// Nothing is being returned.
//The function will return undefined.
//The code a+b after the return wont be reachable


/*function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);*/

// =============> write your explanation here
//The code defines a function sum that takes two parameters a , b. 
//There is a return statement that is undefined. 
// a+b expression calculates a,b but its result cant be accessed.
//The function is called with arguments 10 and 32, but it returns undefined so that is teh value that
//gets inserted into the template literal.
//The output we see on terminal is 
//"The sum of 10 and 32 is undefined"

// Finally, correct the code to fix the problem
//  =============> write your new code here

function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
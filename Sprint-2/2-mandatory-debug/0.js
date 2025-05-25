// Predict and explain first...

// =============> write your prediction here
/*

320
The result of multiplying 10 and 32 is undefined

function multiply(a, b) {
  console.log(a * b);
}


console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
*/
// =============> write your explanation here
/*
The multiply function logs the result of a * b but does not return it.

So when multiply(10, 32) called inside the template literal, it logs 320 to the console as a side effect.

But since the function doesn't return anything, its return value is undefined.

Therefore, the template literal evaluates to:

"The result of multiplying 10 and 32 is undefined"

*/

// Finally, correct the code to fix the problem
//  =============> write your new code here

function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

//result
//The result of multiplying 10 and 32 is 320
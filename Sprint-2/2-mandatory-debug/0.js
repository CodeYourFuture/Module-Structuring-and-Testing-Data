// Predict and explain first...

// =============> write your prediction here
//I think that the problem is our function multiply does not return any value but write in console
// However, we are calling the function inside another console.log and expecting the function to return some value.

/*function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
*/
// =============> Yeah, when we run the code we get the following output which shows that second console is not able to get the value from the function as the function does not return any value.
/*
 320
The result of multiplying 10 and 32 is undefined
*/

// Finally, correct the code to fix the problem
//  =============> write your new code here

function multiply(a, b) {
  return a * b;
}
console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

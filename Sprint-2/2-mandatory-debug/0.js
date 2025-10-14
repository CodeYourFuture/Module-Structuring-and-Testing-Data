// Predict and explain first...

// =============> write your prediction here
//line 7 will log the result of a * b, line 10 will throw an error since the function does not return anything so it will say The result of multiplying 10 and 32 is undefined.

//function multiply(a, b) {
//   console.log(a * b);
//}

//console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
//since the function does not return a value we get undefined passed back to the console.

// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

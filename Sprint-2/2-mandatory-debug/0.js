// Predict and explain first...

// =============> write your prediction here
// The function is not returning the output of its calculation. Therefore, when we try to log the result of the function call, it will return 'undefined'.
/*
function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
*/
// =============> write your explanation here
// 1- The function 'multiply' does not return any value. It only logs the result to the console.
// 2- When 'multiply(10, 32)' is called inside the template literal, it returns 'undefined', so the final output will be "The result of multiplying 10 and 32 is undefined".

// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// Predict and explain first...
//  =============> write your prediction here
// The function is not returning the output of its calculation. Therefore, when we try to log the result of the function call, it will return 'undefined'.
/*
function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
*/
// =============> write your explanation here
// 1- The function 'sum' does not return any value. It only has a return statement without any value, which means it returns 'undefined'.
// 2- When 'sum(10, 32)' is called inside the template literal, it returns 'undefined', so the final output will be "The sum of 10 and 32 is undefined".

// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

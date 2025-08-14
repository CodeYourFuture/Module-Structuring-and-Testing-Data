// Predict and explain first...
//  =============> write your prediction here
// it does not return anything and there is a code in the sum function after the return. 

// function sum(a, b) {
//   return;
//   a + b;
// }

// console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here
// We should update the function return as "return a + b" or we can declare a variable as a "result = a+b" before the return and call that variale in the return line.
// Finally, correct the code to fix the problem
//  =============> write your new code here
function sum(a, b) {
  return a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// OR 
function sum(a, b) {
  const result = a + b;
  return result;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);
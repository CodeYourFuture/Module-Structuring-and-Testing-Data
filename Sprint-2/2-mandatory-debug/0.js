// Predict and explain first...

// =============> write your prediction here
// There is no return in the function of multiply. it just prints out the result(a*b) and does not return anything and it gives undefined when we call the function.

// function multiply(a, b) {
//   console.log(a * b);
// }

// console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
// We need to declare a result variable as "const result = a * b;" and call this variable when we return the result.

// Finally, correct the code to fix the problem
//  =============> write your new code here

function multiply(a, b) {
  const result = a * b;
  return result;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// Predict and explain first...

// =============> write your prediction here
// I think there is nor function call has been made. a and b only inserted as function parameters.

// function multiply(a, b) {
//  console.log(a * b);
// }

// console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
// The result of multiplying 10 and 32 is undefined. This is the error. Now I think the reason for showing the result undefined is that 
// console.log(a * b); only prints 320 but the function does not return anything. 

// Finally, correct the code to fix the problem
//  =============> write your new code here
// The correct code:

function multiply(a, b) {
  return a * b;
}
console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// Predict and explain first...

// =============> write your prediction here

// the function won't throw error. However, the function doesn't 
// have a return expression. Therefore the function is called inside 
// the console.log it will give undefined function.

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here

// 320
//The result of multiplying 10 and 32 is undefined

// The above error message is displayed when tested with node.
// The console.log inside the function outputs the correct value(320)
// However the function multiply does not return value so when the multiply function is called on line 9 it returns undefined.

// Finally, correct the code to fix the problem
//  =============> write your new code here

function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
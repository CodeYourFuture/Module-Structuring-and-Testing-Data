// Predict and explain first...

// =============> write your prediction here
// the console.log inside the function will run but the one in global will raise the undefine error
// we will get an undefine error because we are not retuning the value

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
// To use the final result of a function, we must return the value. Otherwise, it will raise an undefined error.

// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
  const result = a * b;
  console.log(result); 
  return result; 
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
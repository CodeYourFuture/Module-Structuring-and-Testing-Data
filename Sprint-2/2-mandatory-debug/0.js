// Predict and explain first...

// =============> Why are there 2 console.logs? I am not sure how to explain but I don't think it will work because of that.

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> Well nothing is being returned so the outside console.log is just printing undefined. I will change the first console.log into a const and return that for the function.

// Finally, correct the code to fix the problem
//  =============> write your new code here

function multiply(a, b) {
  const result = (a * b);
  return result;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
// Predict and explain first...
//  =============> write your prediction here

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

// =============> write your explanation here

the code dont work cuz the return stops the code before it adds the numbers.

so js never does a + b, that’s why it show undefined.

// Finally, correct the code to fix the problem
//  =============> write your new code here

function sum(a, b){
  
  return a + b
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`)


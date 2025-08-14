// Predict and explain first...

// =============> write your prediction here I think we will have output like this 320
//                                                                                 The result of multiplying 10 and 32 is undefined

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here Because we don t have return in our function, so when we will call our function it will print console.log(a * b) in our case 320 in console and after The result of multiplying 10 and 32 is undefined, because our function is without return

// Finally, correct the code to fix the problem
//  =============> write your new code here

function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

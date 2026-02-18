// Predict and explain first...

// =============> write your prediction here
//  We are trying to log the function result, but because we are not returning it, we are not going to be able to. I'm not sure what type of error we will get

// function multiply(a, b) {
//   console.log(a * b);
// }

// console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
// The console.log() inside the function is able to print a * b, but the console.log outside the function returns "The result of multiplying 10 and 32 is undefined", because, as already mentioned, the called function is not returning anything

// Finally, correct the code to fix the problem
//  =============> write your new code here

function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// Predict and explain first...

// =============> write your prediction here
// w will get an error because the function `multiply` isn't returning anything

//function multiply(a, b) {
//  console.log(a * b);
//}

//console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
// we need to return the result of a*b in the function to be able to use it globally

// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
  return (a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
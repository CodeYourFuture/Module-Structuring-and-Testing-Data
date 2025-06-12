// Predict and explain first...
// The output will be undefined 
// Because the Multiply function doesnt return Value

// =============> write your prediction here

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
//The output is `undefined` because the multiply function logs the result of the multiplication to the console but does not return it.
//In this case the multiply function performs console.log but it does not return the value

// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a,b) {
  return a*b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
// The output result is 320
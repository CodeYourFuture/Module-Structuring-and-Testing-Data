// Predict and explain first...
// The issue with this code is that the multiply function does not return a value, but it is trying to use it in a template string which expects a return value.

//To fix this, I should modify the multiply function to return the product of a and b instead of just logging it.

// function multiply(a, b) {
//   console.log(a * b);
// }

// console.log(The result of multiplying 10 and 32 is ${multiply(10, 32)});



function multiply(a, b) {
  return(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

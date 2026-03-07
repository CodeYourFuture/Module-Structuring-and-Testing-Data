// Predict and explain first...

// =============> write your prediction here
// The command is to multiply two numbers and print the result. However, the function multiply does not return any value, it only logs the product to the console. Therefore, when we try to use the result of multiply in a template literal, it will be undefined, which will lead to an incorrect output.

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
// The function multiply takes two parameters, a and b, and logs their product to the console. However, it does not return any value, which means that when we try to use the result of multiply in the template literal, it will be undefined. This will lead to the output: "The result of multiplying 10 and 32 is undefined". To fix this, we need to modify the multiply function to return the product instead of just logging it.

// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// Now the function multiply returns the product of a and b, and the output will be: "The result of multiplying 10 and 32 is 320".

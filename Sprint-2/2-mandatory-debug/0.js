// Predict and explain first...

// I predict that the code will output the result of the multiplication, but the function multiply will not return a value.

// this function should multiply two numbers and return the result


function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here

// The function multiply is using console.log to output the result of the multiplication, but it is not returning a value.
// Therefore, the template literal will not be able to access the result of the multiplication.

// Finally, correct the code to fix the problem
//  =============> write your new code here

function multiply(a, b) {
  return a * b;
}
console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
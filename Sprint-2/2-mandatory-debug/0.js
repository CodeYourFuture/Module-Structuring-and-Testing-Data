// Predict and explain first...

// The result from the function will be undefined. > write your prediction here

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// If a function do not return any value it will be automatic undefined,
//  only by using return we can use this function to print the result in terminal and elsewhere in our program. > write your explanation here

// Finally, correct the code to fix the problem
//  =============> write your new code here

function multiply(a, b) {
  return (a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`); 
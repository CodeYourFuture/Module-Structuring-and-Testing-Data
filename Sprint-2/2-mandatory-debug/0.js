// Predict and explain first...

// =============> write your prediction here
// in this code we have a function called multiply that takes two parameters a and b,
//inside the function it will print the result of multiplying a and b,
// but a and b are not defined, not in global scope nor local scope, so we will get error.
// there is another console log statement that will print a string with the result of multiplying 10 and 32,
// but the function multiply does not return any value, so the result will be undefined.
// so the final output will be "The result of multiplying 10 and 32 is undefined"

// function multiply(a, b) {
//   console.log(a * b);
// }

// console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
// it wasn't completely as I predicted, the first console log statement inside the function multiply did worked and
// it printed 320, which means that the function parameters a and b took the values 10 and 32 from the function call multiply(10, 32).
// but the second console log statement printed "The result of multiplying 10 and 32 is undefined" because the function multiply does not return any value,
// so the result of multiplying 10 and 32 is undefined. 

// Finally, correct the code to fix the problem
//  =============> write your new code here
// I will add a return statement to the function multiply that returns the result of multiplying a and b.

function multiply(a, b) {
  return (a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
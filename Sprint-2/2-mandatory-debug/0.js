// Predict and explain first...

// =============> write your prediction here
// The program will print 320 first.
// Then it will " The result of mutiplying 10 and 32 is 320".

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
// The function multiply is used console.log(a * b) to show the result
// however, it does not resturn the value .
// when the function is used inside the sentence with ${multiply(10, 32)}
// JavaScript expects the function to give back a value.
//Becuse the function does not return anything, the result becomes undefined.

// Finally, correct the code to fix the problem
//  =============> write your new code here
function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)} `);

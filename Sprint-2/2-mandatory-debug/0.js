// Predict and explain first:--\
// The multiply function logs the product of a and b but does not return anything.So the console.log will print:
//The result of multiplying 10 and 32 is undefined

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// he function multiply(a, b) uses console.log to output the product but does not have a return statement.

// Finally, correct the code to fix the problem

 

function multiply(a, b) {
  return a * b;  // Return the product instead of logging it
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

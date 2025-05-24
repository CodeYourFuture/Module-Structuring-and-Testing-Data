// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here

/*This program will throw an error when it runs.
Specifically, a SyntaxError will occur when the function is declared.*/

// Try playing computer with the example to work out what is going on

// function convertToPercentage(decimalNumber) {
//   const decimalNumber = 0.5;
//   const percentage = `${decimalNumber * 100}%`;

//   return percentage;
// }

// console.log(decimalNumber);

// =============> write your explanation here
/*
Problem #1:
Inside the function, you're trying to declare a constant (const) with the same name as the function parameter:

const decimalNumber = 0.5;
This is not allowed — JavaScript doesn't let you redeclare a parameter using const or let.
Error: Identifier 'decimalNumber' has already been declared

Problem #2:
Outside the function, there is:
console.log(decimalNumber);
which decimalNumber isn't defined in the global scope, so this will cause another error:
ReferenceError: decimalNumber is not defined

*/
// Finally, correct the code to fix the problem
// =============> write your new code here

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

console.log(convertToPercentage(0.5)); 


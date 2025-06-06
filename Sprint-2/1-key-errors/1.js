// Predict and explain first...
// An error will be returned on execution of the code

// Why will an error occur when this program runs?
/*
I predict that this function will throw a SyntaxError "Identifier 'decimalNumber' has already been declared" because the variable `decimalNumber` is being declared twice in the same scope, once as a parameter and then again inside the function body as a const, which is what happened in the 0.js file. Also the console.log statement is trying to log the variable decimalNumber, which is incorrect as this variable is only accessible within the function body (it has function scope ) and cannot be accessed outside of the function. Instead, the code should  call the function with an input and log that result.
*/

// Try playing computer with the example to work out what is going on

// function convertToPercentage(decimalNumber) {
//   const decimalNumber = 0.5;
//   const percentage = `${decimalNumber * 100}%`;

//   return percentage;
// }

// console.log(decimalNumber);

/* the code above is a function for converting a decimal number to a percentage. Firstly it takes a decimal number as an input. Within the function a variable named decimalNumber is declared as a constant with a value of 0.5. Then a variable named percentage is declared whose value is the evaluation of calculating the decimalNumber variable by 100 and adding a percentage sign at the end (also known as appending). Finally, it returns the percentage variable value.
 */

// Finally, correct the code to fix the problem

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

console.log(convertToPercentage(0.5));

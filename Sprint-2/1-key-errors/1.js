// Predict and explain first... :A function convertToPercentage is declared, which takes a parameter decimalNumber. 
// Inside the function, there is an attempt to redeclare decimalNumber using const, which is not allowed in JavaScript. 
// This will result in a SyntaxError because function parameters are already declared variables, and const does not allow redeclaration within the same scope.
// the function does not use the argument passed to it, as decimalNumber is overridden inside the function.
//  If the redeclaration issue were fixed, the function would correctly convert the input decimal number to a percentage and return it.



// Why will an error occur when this program runs? JavaScript does not allow redeclaring function parameters with const or let.
// and the function does not use the argument passed to it
// =============> write your prediction here : We have a SyntaxError

// Try playing computer with the example to work out what is going on

// function convertToPercentage(decimalNumber) {
//   const decimalNumber = 0.5;
//   const percentage = `${decimalNumber * 100}%`;

//   return percentage;
// }

// console.log(decimalNumber);

// =============> write your explanation here: console.log(decimalNumber); is outside the function and attempts to access decimalNumber, which is not defined in the global scope
// When you try to log decimalNumber using console.log(decimalNumber); outside the function, you will get a ReferenceError because decimalNumber is not defined in the global scope.

// In JavaScript, function parameters and variables declared inside a function are local to that function and cannot be accessed outside of it. 
// Since decimalNumber is only declared as a parameter inside convertToPercentage, it does not exist in the global scope, leading to the error when trying to log it.



// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

const value = 0.5;
console.log(convertToPercentage(value));

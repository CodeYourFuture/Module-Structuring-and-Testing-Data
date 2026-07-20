// Predict and explain first...

// Why will an error occur when this program runs?
// Prediction: Two errors — (1) re-declaring decimalNumber with const inside the function
// when it is already a parameter causes a SyntaxError.
// (2) console.log(decimalNumber) outside the function will throw ReferenceError because
// decimalNumber is not defined in the outer scope.

// Try playing computer with the example to work out what is going on

// Original broken code:
// function convertToPercentage(decimalNumber) {
//   const decimalNumber = 0.5;
//   const percentage = `${decimalNumber * 100}%`;
//   return percentage;
// }
// console.log(decimalNumber);

// Explanation: The parameter decimalNumber already exists in the function scope;
// const re-declaration is illegal. Also, decimalNumber is not accessible outside the function.
// Fix: remove the const re-declaration inside the function, and pass a value when calling it.

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

console.log(convertToPercentage(0.5));

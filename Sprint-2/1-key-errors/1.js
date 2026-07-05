// Prediction: Two errors — (1) re-declaring decimalNumber with const inside the function
// when it is already a parameter shadows and causes a SyntaxError.
// (2) console.log(decimalNumber) outside the function will throw ReferenceError because
// decimalNumber is not defined in the outer scope.
// Explanation: The parameter decimalNumber already exists; const re-declaration is illegal.
// Also, decimalNumber is not accessible outside the function.
// Fix: remove the const re-declaration inside the function, and pass a value to the function.

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

console.log(convertToPercentage(0.5));

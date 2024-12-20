// Predict and explain first...
//* This code will have errors like Syntax errors, reference error ...

// Why will an error occur when this program runs?
//* 1. "SyntaxError: Identifier 'decimalNumber' has already been declared" > decimalNumber is declared as a parameter for the function
// but it declared again inside of the function that it cause syntax error.
//* 2. "ReferenceError: decimalNumber is not defined" > decimalNumber value is defined inside of the function so it is in a local scop
// then there is no access to it outside of the function so we will see reference error.

// Try playing computer with the example to work out what is going on
//* For fixing this problem we need to remove second declaration of decimalNumber and use it as a parameter directly.
//* Then we need to call the function in console.log to see the result. So we can put the value of 0.5 as a parameter in the function
// and call it
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.5)); // OUTPUT ; "50%"

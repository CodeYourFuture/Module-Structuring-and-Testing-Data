// Predict and explain first...

// Why will an error occur when this program runs?
// //Predict: the program throws an error, because the variable decimalNumber is not declared globally.

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

/// When we call the function we should pass a value, which in this case it does not exist outside the function
// constant decimalNumber =0.5 should not be inside the function, which will give us error, because it is local scop if it's inside the function
// we can't re-declare the parameter and a variable with the same name in a function


// Finally, correct the code to fix the problem
// =============> write your new code here

const decimalNumber = 0.5;
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}
console.log(convertToPercentage(decimalNumber));

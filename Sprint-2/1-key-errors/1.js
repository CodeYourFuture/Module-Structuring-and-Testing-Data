// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
// I think the value "decimalNumber" is undeclared so it will not work

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

let decimalNumber = 0.5;
console.log(convertToPercentage(decimalNumber));

// =============> write your explanation here
// The variable decimalNumber didn't need to be redefined in the function
// Instead it should come from outside and be passed to the function

// Finally, correct the code to fix the problem
// =============> write your new code here

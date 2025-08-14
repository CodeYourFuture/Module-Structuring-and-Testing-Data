// Predict and explain first...

// Why will an error occur when this program runs
// =============> write your prediction here
the const variable is being declared twice
// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);


// =============> write your explanation here
because the percentage is being declared twice the code will not run smoothly, console.log(decimalNumber) will crash the program because it's trying to access a variable that only exists inside the function
// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

console.log(convertToPercentage(7.9));
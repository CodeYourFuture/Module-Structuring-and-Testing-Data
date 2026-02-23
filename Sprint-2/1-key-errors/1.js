// Predict and explain first...

// Why will an error occur when this program runs?
// =============> The variable decimalNumber has been declared twice and will retun an error.

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> The variable decimalNumber has been declared twice and returned an error saying it had already been declared. There is also a console log error as it is trying to use a variable that is inside the function and hasn't been declared outside. 


// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  console.log(percentage);
  return percentage;
}
//We can also use console log inside the function. 
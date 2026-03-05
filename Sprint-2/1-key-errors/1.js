// Predict and explain first...
// syntax error identifier decimalNumber be already declare
// there is no function call and then you can't use the local variable decimalNumber out of the function
// Why will an error occur when this program runs?
//decimalNumber is already declared as a parameter, so declaring it again inside the function causes an error.

//There is no function call.

//You cannot use the local variable decimalNumber outside the function scope.
// =============> write your prediction here

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}
console.log(decimalNumber);

// =============> write your explanation here
//The error occurred because a local variable was redeclared inside the function using a variable keyword. Since the parameter already acts as a local variable, redeclaring it caused an error.

//To fix this, I removed the variable keyword and modified the existing parameter instead.

//I also removed the unused variable from console.log because it was outside the function scope.

//Finally, I called the function directly inside console.log using convertToPercentage() so the function executes properly and returns the correct value.
// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

const percentageValue = convertToPercentage(0.5) ;
console.log(percentageValue);
// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
// The code will not work because decimalNumber is declared twice — once as a function parameter and again using const inside the function. 
// Also, the function is not called correctly; instead, the code tries to access a variable that isn’t in the global scope.

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> write your explanation here
// The function 'convertToPercentage' is defined to take one input called decimalNumber. Inside the function, the the same variable is declared using 'const', 
// which causes a conflict because JavaScript does not allow a parameter and a local variable to have the same name in the same scope. 
// This causes a syntax error and stops the code from running. Also, console.log(decimalNumber) tries to access a variable that doesn’t exist globally, 
// which would cause a 'ReferenceError' if the code ran to the end. To fix the code, I will remove the duplicate 'const decimalNumber = 0.5' 
// and call the function properly using a value as an argument.  
 

// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {

  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

console.log(convertToPercentage(0.68));

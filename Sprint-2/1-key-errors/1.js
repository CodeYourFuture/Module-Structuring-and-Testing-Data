// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
/* I predict that it will throw a SyntaxError because decimalNumber is declared twice inside the same function, 
and JvaScript does not allow redeclaring a variable with const in the same scope. 
It will also throw a ReferenceError because decimalNumber is logged outside the function, where it is not defined. */

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> write your explanation here
/* The function receives decimalNumber as a parameter, so that variable already exists in the function scope. Declaring const decimalNumber = 0.5; 
inside the function attempts to create a second variable with the same name, which causes a SyntaxError. Additionally, the console.log(decimalNumber) is outside the function, so JavaScript cannot
find a variable called decimalNumber in that scope, which causes a ReferenceError. */ 

// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

console.log(convertToPercentage(0.5));


// Predict and explain first...

// Why will an error occur when this program runs?
// =============> The error occurs because the variable `decimalNumber` is declared twice in the function `convertToPercentage`. 
//                The first declaration is in the function parameter, and the second declaration is inside the function body. 
//                This causes a conflict and results in a syntax error.

// Try playing computer with the example to work out what is going on

//function convertToPercentage(decimalNumber) {
//const decimalNumber = 0.5;
//const percentage = `${decimalNumber * 100}%`;

//return percentage;
//}

//console.log(decimalNumber);

// =============> when you run this code it will start by executing the console.log statement and it will look for the variable `decimalNumber`; 
//                since it is already declared we will get a syntax error and the program will stop executing.

// Finally, correct the code to fix the problem
// =============> write your new code here

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

const result = convertToPercentage(0.5);
console.log(result);

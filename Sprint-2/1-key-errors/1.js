// Predict and explain first...

/* The code will have no output and there are errors in the code. I run the code in the terminal 
and the (decimalNumber) parameter has already been declared inside the function, there is no need 
to redeclare it again.  


// Why will an error occur when this program runs?
// =============> write your prediction here
/* (decimalNumber) is declared by const after it has been declared in the function.
console.log(decimalNumber) is called outside the function and the (decimalNumber) was
not declared outside the function.*/

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> write your explanation here

// Finally, correct the code to fix the problem
// =============> write your new code here

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}
const decimalNumber = 0.5;
console.log(convertToPercentage(decimalNumber));

/* In the corrected code the (decimalNumber) is only declared in the function. 
The console.log will output the right value related to the function in the code.

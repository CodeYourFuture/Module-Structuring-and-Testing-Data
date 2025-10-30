// Predict and explain first...

// Why will an error occur when this program runs?

// =============> write your prediction here 

// the error occur because the decimalNumber has already been declared.

// Try playing computer with the example to work out what is going on



// =============> write your explanation here

// I tried to run the code it gives me SyntaxError,that the decimalNumber has already been declared, we can see in the parameter already has name decimalNumber. 
// thats why declaring it again inside the function, causes an error.

// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber){
  const percentage = `${decimalNumber * 100}%`;
  return percentage
}
console.log (convertToPercentage(0.5));
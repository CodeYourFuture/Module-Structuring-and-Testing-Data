// Predict and explain first...

// Why will an error occur when this program runs?
// =============> an error message - decimalNumber already declared - will pop-up simply because you have `decimalNumber` as a 
// parameter and in the following line used the same name to declare a variable. 


// When the JS engine analyses my code it will release that I have decimalNumber as a parameter of function convertToPercentage (line 12).
// then in lin 1 it will notice that decimalNumber has been declared as a variable in the same scope -which is syntactically wrong and 
// as a result the code breaks and a syntax error message pops up. 

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> 

// Finally, correct the code to fix the problem
const decimalNumber = 0.5;
function convertToPercentage(decimalNumber)  {
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}
console.log(decimalNumber);

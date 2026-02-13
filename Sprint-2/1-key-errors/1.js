// Predict and explain first: Decimalnumber is already declared as a parameter of the function convertToPercentage, 
// so when we try to declare it again inside the function, it will give an error.

// Why will an error occur when this program runs?
// =============> write your prediction here : The error will occur because we are trying to declare a variable with the same name as the parameter of the function.

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.5));

// =============> write your explanation here : I removed the variable variation inside the function and directly calculated the percentage.

// Finally, correct the code to fix the problem
// =============> write your new code here :function convertToPercentage(decimalNumber) {
  
 // const percentage = `${decimalNumber * 100}%`;

 // return percentage;
// }

//console.log(convertToPercentage(0.5));

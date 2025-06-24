// Predict and explain first...
//I think it will create a syntax error.Since decimal number is inside the funtion while running the function.
// Why will an error occur when this program runs?
// =============> write your prediction here synax error such us decimal number is not defined

// Try playing computer with the example to work out what is going on


function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> write your explanation here
// we declared a function convertToPercentage assigned with decimalNumber
//as a parameter then we use const to declare a new variable using the 
// parameter's name which is wrong.So here again decimalNumber was either a parameter 
// or declared in wrong way inside the function. We notice that console.log is placed outside the function
// and in order to return its value, it will show reference error. You may ask why? Well, simply, because
// there is no such global thing defined outside the function.

// Finally, correct the code to fix the problem
// =============> write your new code here

function convertToPercentage(decimalNumber) {
  
  const percentage = `${decimalNumber*100}%`;
  
  return percentage;
}
  console.log(convertToPercentage(0.5));


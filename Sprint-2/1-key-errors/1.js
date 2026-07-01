// Predict and explain first...
// the will be answer of the percentage printed on the console.log.because the function has been declared.

// Why will an error occur when this program runs?
// =============> write your prediction here
//there will be a code error because of the function has been declared twice.

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> write your explanation here
//when a function is called a value it given to the parameter.
// Finally, correct the code to fix the problem
// =============> write your new code here

function convertToPercentage(decimalNumber){
  const percentage = `${decimalNumber * 100 }%`;
  return percentage;
}
console.log (convertToPercentage(0.5)) //50 
console.log (convertToPercentage(0.25)) //25%
// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here

// Error occurs because console.log is trying to show a variable, that wasn't declared globally 

// Try playing computer with the example to work out what is going on

// function convertToPercentage(decimalNumber) {
//   const decimalNumber = 0.5;
//   const percentage = `${decimalNumber * 100}%`;

//   return percentage;
// }

// console.log(decimalNumber);

// =============> write your explanation here
// after running the program I understood that program is not working because we declare the const 'decimalNumber' which was already declared with the function. 
// Also the code is trying to show 'decimalNumber', which is local variable. What we want to show is a return of 'convertToPercentage' function 

// Finally, correct the code to fix the problem
// =============> write your new code here

function convertToPercentage(decNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage());
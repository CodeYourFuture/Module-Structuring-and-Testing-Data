// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here

// decimalNumber has been declared in the function and the console is logging it outside instead of calling th e function


// Try playing computer with the example to work out what is going on

// function convertToPercentage(decimalNumber) {
//   const decimalNumber = 0.5;
//   const percentage = `${decimalNumber * 100}%`;

//   return percentage;
// }

// console.log(decimalNumber);

// =============> write your explanation here
// /home/martinmclean158/Module-Structuring-and-Testing-Data/Sprint-2/1-key-errors/1.js:12
//   const decimalNumber = 0.5;


// Finally, correct the code to fix the problem
// =============> write your new code here

function convertToPercentage(decimalNumber) {
  decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(0.5));
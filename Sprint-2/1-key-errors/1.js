// Predict and explain first...
// Will get syntax error 

// Why will an error occur when this program runs?
// =============> Cause same variable (decimalNumber) is reassign in the function body

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  //const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}
let number = convertToPercentage(0.5);
console.log(`The result is ${number}`);

// =============> write your explanation here

// Finally, correct the code to fix the problem
// =============> 
  //function convertToPercentage(decimalNumber) 
  // {
  //const percentage = `${decimalNumber * 100}%`;
  //return percentage;
//}
//let number = convertToPercentage(0.5);
// console.log(`The result is ${number}`);

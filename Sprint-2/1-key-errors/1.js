// Predict and explain first...
// Why will an error occur when this program runs?
//due to identifier redeclaration on line 11
// =============> write your prediction here
//Working with previous example, I believe similar Syntax error will be returned as decimalNumber has already been declared
// in  line 10 as a parameter so it shouldn't be redeclared again in line 9.

// Try playing computer with the example to work out what is going on

// function convertToPercentage(decimalNumber) {
//   const decimalNumber = 0.5;
//   const percentage = `${decimalNumber * 100}%`;

//   return percentage;
// }

// console.log(decimalNumber);

// =============> write your explanation here
//The function convertTo Percentage's goal is to convert number value given to decimalNumber identifier by multiplying it by 100.
//The code seems to be otherwise alright except for the redeclaration on line 11.
//Console.log is also set with incorrect parameter to print out what we want to see
// Finally, correct the code to fix the problem
// =============> write your new code here
//
function convertToPercentage(decimalNumber) {
  decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}
console.log(convertToPercentage());

// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
// This function produce an error as we try to declare a new constant with same name as in function Parameter.

// Try playing computer with the example to work out what is going on
/*
after running this code i got this error.const decimalNumber = 0.5;
        ^
SyntaxError: Identifier 'decimalNumber' has already been declared
*/

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

// console.log(decimalNumber);

// =============> write your explanation here
/*
as decimalNumber is function parameter and we try to declare a constant with same name and in same scope, which produce error.  
1.we need change name of constant if we need it and need to change it in console.log() as well and need to mve it in side function
 and then need to call function from outside.
2. we can remove this constant and call function from out side and changed decimalNumber to with function name.
*/

// Finally, correct the code to fix the problem
// =============> write your new code here
/*
function convertToPercentage(decimalNumber) {
  const anotherDecimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;
  console.log(anotherDecimalNumber);// 0.5
  return percentage;
}
console.log(convertToPercentage(1.5));//150%
*/


/*
function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}
console.log(convertToPercentage(1.5));//150
*/




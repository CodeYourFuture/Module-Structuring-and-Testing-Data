// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
// the problem is in line 10, because we can not use the "decimalNumber" twice, currently once we used as parameter and again as variable,
// this will cause an error "SyntaxError: Identifier 'decimalNumber' has already been declared"
// Try playing computer with the example to work out what is going on

// function convertToPercentage(decimalNumber) {
//   const decimalNumber = 0.5;
//   const percentage = `${decimalNumber * 100}%`;

//   return percentage;
// }

// console.log(decimalNumber);

// =============> write your explanation here
// by line 9 the computer we remember the name of the function and its parameter but still it doesn't do any thing.
// by line 10 the computer will try to declare a new variable with the same name as the parameter of the function 
// and it will cause an error because we can not use the same name twice in the same scope. even if it accept it no matter what argument 
//we pass to the function it will always take the value of the variable that we declared inside the function.
//line 11 the computer will try to calculate the percentage but it will not reach this line because of the error in line 10.
// line 13 the computer will try to print the value of decimalNumber but it will not reach this line because of the error in line 10. but if reach 
// it will always print 0.5 no matter what argument we pass to the function.
// in this case the error is "SyntaxError: Identifier 'decimalNumber' has already been declared" but if we fix it ,
//then then console will give us the decimal number that we pass to the function in percentage format.
// Finally, correct the code to fix the problem
// =============> write your new code here
function convertToPercentage(decimalNumber) {
  
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(convertToPercentage(.45));

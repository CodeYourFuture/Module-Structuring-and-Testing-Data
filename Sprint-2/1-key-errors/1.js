// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here
// I thought the function will work properly but couldn't print the correct value cause the value should be convertToPercentage 
// but it is declared only as decimalNumber.

// Try playing computer with the example to work out what is going on

//function convertToPercentage(decimalNumber) {
  //const decimalNumber = 0.5;
  //const percentage = `${decimalNumber * 100}%`;

  //return percentage;
//}

//console.log(decimalNumber);

// =============> write your explanation here
// When I run the code after my prediction it shows SyntaxError: Identifier 'decimalNumber' has already been declared. Which means
// decimalNumber has been declared already as function parameter and then again declared inside the function as variable. Then when I 
// declare const decimalNumber = 0.5; outside the function and run the code it shows the value of variable decimalNumber which is 0.5. Then
// I replace console.log(decimalNumber); to console.log(convertToPercentage); and run the code again and it shows this output 
// [Function: convertToPercentage] which means only the funtion name. Then I replace console.log(convertToPercentage); to
// console.log(convertToPercentage(decimalNumber)); again and it finally works properly that means converted the decimal number to 
// percentage value which shows 50% . 


// Finally, correct the code to fix the problem
// =============> write your new code here
// Corrected code:

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}
const decimalNumber = 0.5;
console.log(convertToPercentage(decimalNumber));
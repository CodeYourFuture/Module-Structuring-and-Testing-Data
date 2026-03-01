// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here : /* my prediction is that parameter was declared inside the function
//                                                 and also local variable can not be logged globally.  */

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> write your explanation here : /* in this code the computer first read the function and
//                                                 and store the variables and try to execute the function in case of the
//                                                 above code the computer first take the parameter and do the next step
//                                                 it reads the const decimalNUmber that is error so it will execute
//                                                 identifier error.  */

// Finally, correct the code to fix the problem
//=============> write your new code here :   /*let newDecimalNumber = 0.5;
//                                             function convertToPercentage(decimalNumber) {
//                                               const percentage = `${decimalNumber * 100}%`;
//                                               return percentage;
//                                             }
//                                              console.log(convertToPercentage(newDecimalNumber));  */

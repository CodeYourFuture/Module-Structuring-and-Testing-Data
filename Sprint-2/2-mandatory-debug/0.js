// Predict and explain first...

// =============> write your prediction here
//===========Prediction=======
// I think the code will not produce the desired result as the function is not returning any value
/*function multiply(a, b) {
  console.log(a * b);
}
console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
console.log(multiply(3, 5));
typeof(multiply(3, 4));*/

// =============> write your explanation here
//===============Explanation=========
// The function itself prints out the result, but the result has no (type) as such and can not be used as
// a data type. 
//
// Finally, correct the code to fix the problem
//============correction============
// To correct the code "return" needs to be introduced.
//  =============> write your new code here
function multiply(a, b) {
  return (a * b);
}
console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
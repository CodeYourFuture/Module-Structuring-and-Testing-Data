// Predict and explain first...

// =============> when the console.log outside the function is performed $(multiply(10, 32)) 
// it will print the text The result of multiplying by 10 and 32 is
// but then will state undefined for the value


function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> there is no return 
// console.log(a*B) printed the result of multiplying a and b but because there is no return 
// the answer was not returned to the function so the console.log outside the function did not 
// receive the value and printed undefined instead


// Finally, correct the code to fix the problem
//  =============>  
// function multiply(a, b) {
//   return a * b;
// }
// console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// I removed the first console.log because it didn't seem necessary to print out 320
// if you need to print 320 as well as the final console-log statement then console.log(a * b) 
// can be added back in but it would need to be before the return statement because if it is
// after the return statement it will never be reached and the value will not be printed out


// Predict and explain first...

// =============> write your prediction here
//The program will output undefined in the string  because the function multiply(a, b) does not return a value—it only logs the result.

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here
//The function multiply(a, b) prints the result using console.log(a * b); but does not return it.
//When calling multiply(10, 32) inside the template literal, JavaScript expects a return value but gets undefined instead.


// Finally, correct the code to fix the problem
//  =============> write your new code here
//function multiply(a, b) {
  //return a * b;
//}


//console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);


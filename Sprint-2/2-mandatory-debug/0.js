// Predict and explain first...

// =============> write your prediction here
/*
The function multiply when is log into the terminal. we will receive a print out expression from 
first console.log inside the function and undefined value from the string template inside the section console.log.
*/

/*
function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);
*/

// =============> write your explanation here
/*
First the function multiply have 2 parameter identifier a and b, the main purpose of this function is to multiply any argument that put 
into the identifier a and b. Inside the the function is we have the function call console.log and nested inside is the expression from multiply of a and b.
However this will lead to error, since we need to return the expression(value) back to the function so it can be re used when call in a string template or other
function.

*/
// Finally, correct the code to fix the problem
//  =============> write your new code here

function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

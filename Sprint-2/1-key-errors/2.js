
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
/*
This function is supposed to square a number, but it will immediately throw a syntax error when the JavaScript engine tries to parse it.

*/

// function square(3) {
//     return num * num;
// }

// =============> write the error message here
//SyntaxError: Unexpected number


// =============> explain this error message here

/*
This line is invalid:function square(3) {

It cannot pass a literal value like 3 as a parameter name in a function definition.

Parameter names must be valid identifiers (like num, x, value), not actual values.
*/
// Finally, correct the code to fix the problem

// =============> write your new code here

function square(num) {
  return num * num;
}

console.log(square(3)); 




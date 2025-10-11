// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
/*
function square(3) {
    return num * num;
}
*/
// =============> write the error message here
// SyntaxError: Unexpected number
// =============> explain this error message here
/*
1-The parameter name '3' is not a valid identifier. Function parameters names must (be valid variable names & not literal values), i.e. start with a letter, underscore (_), or dollar sign ($), and cannot be a number.
2-Also, the function uses 'num' which is not defined anywhere. It should use the parameter name instead.
3-Finally, the function is not called anywhere, so it won't produce any output.
*/

// Finally, correct the code to fix the problem

// =============> write your new code here
function square(num) {
  return num * num;
}
console.log(square(3)); // This line is inserted only to test the function. It returns 9


// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
// There will be a syntax error because the function parameter should be a variable name, but now it is a number.

function square(3) {
    return num * num;
}

// =============> write the error message here
// SyntaxError: Unexpected number

// =============> explain this error message here
// The parameter in the function defined in line 9 must be a variable name (like num), not a number like 3

// Finally, correct the code to fix the problem

// =============> write your new code here
function square(num) {
  return num * num;
}
console.log(square(3));

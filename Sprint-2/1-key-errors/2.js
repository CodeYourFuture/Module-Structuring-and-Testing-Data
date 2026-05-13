// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
// num hasn't been defined, that will throw an error

/*
function square(3) {
    return num3 * num3;
}
*/

// =============> write the error message here
// Uncaught SyntaxError: Unexpected number

// =============> explain this error message here
// the error appears in the line before, a function has to take defined parameters, these
// parameters cannot be represented by numbers (or at least begin with numbers)

// Finally, correct the code to fix the problem

// =============> write your new code here

function square(num) {
  return num * num;
}

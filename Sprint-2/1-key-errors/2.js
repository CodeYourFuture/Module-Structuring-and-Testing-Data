
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error
// The code will throw a **SyntaxError** because you cannot 
// use a number (`3`) as a function parameter name.

// =============> write your prediction of the error here
// SyntaxError: Unexpected number

function square(3) {
    return num * num;
}

// =============> write the error message here
// SyntaxError: Unexpected number

// =============> explain this error message here
// In JavaScript, function parameters must be valid variable names (identifiers).  
// Using a number like `3` directly as a parameter name is invalid syntax, 
// so JavaScript throws a `SyntaxError: Unexpected number`.

// Finally, correct the code to fix the problem

// =============> write your new code here

function square(num) {
  return num * num;
}

console.log(square(3)); 



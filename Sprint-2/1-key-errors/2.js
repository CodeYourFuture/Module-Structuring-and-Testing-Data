
// Predict and explain first BEFORE you run any code...


// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
// It will show an error because function parameters must be variable names,
// not literal values.

// function square(3) {
   // return num * num;
// }

// =============> write the error message here
// SyntaxError: Unexpected number

// =============> explain this error message here
// The error message "SyntaxError: Unexpected number" indicates that 
// the JavaScript interpreter encountered a number instead of a valid 
// identifier like a variable name.
// In function declarations, parameters must be variable names and not 
// literal values like 3. That is why using function square(3) caused a syntax error.

// Finally, correct the code to fix the problem

// =============> write your new code here

function square(num) {
  return num * num;
}

console.log(square(3)); 



// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
// SyntaxError due to wrong variable

function square(num) {
    return num * num;
}

// =============> write the error message here
// SyntaxError: Unexpected token 
// =============> explain this error message here
// Function parameters must be valid identifiers names like num, not literal values.
// Finally, correct the code to fix the problem
// function square(num) 
// =============> write your new code here
function square(num) {
  return num * num;
}
console.log(square(3)); // 


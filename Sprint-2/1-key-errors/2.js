
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
// When the code is being read or parsed by Node, it will throw a syntax error because it cannot interpret the number 3 inside the parentheses.
// This is because a number (3) is not a valid parameter name in a function definition.


//function square(3) {
  //  return num * num;
//}

// =============> write the error message here
// SyntaxError: Unexpected number
// =============> explain this error message here
// This error message indicates that JavaScript only allows identifiers as parameters in a function definition.  
// If a literal value (such as a number, string, or object) is used instead, a SyntaxError will be thrown.


// Finally, correct the code to fix the problem

// =============> write your new code here
function square(num) {
    return num * num;
}

const actualOutput = square(3);
console.log(actualOutput);




// Predict and explain first BEFORE you run any code...

// This function should square any number but instead we're going to get an error

// =============> write your prediction of the error here


//  function square(3) {
//    return num * num;
//   }

// =============> write the error message here
//  /home/justice/Documents/CYF/Module-Structuring-and-Testing-Data/Sprint-2/1-key-errors/2.js:8
//  function square(3) {
//                  ^
// The SyntaxError: Unexpected number 

// =============> explain this error message here

// This occurs because the number "3" is used as a function parameter. 
// This is not valid syntax. A function parameter must be a valid variable name (an identifier),
// not a number. JavaScript expects an identifier or no parameter at all.
// That's why it throws a syntax error.
//
// Finally, correct the code to fix the problem

// =============> write your new code here

function square(num) {
    return num * num;
}

console.log(square(3));
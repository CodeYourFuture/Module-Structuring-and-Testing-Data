
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
// - This function is intended to square any number passed to it — meaning, 
// - if you pass in 3, it should return 9.
// - However, the code as written will produce a syntax and reference error for two reasons:
// - 3 is not a valid parameter name — parameter names must be identifiers (like num, x, etc.).
// - The variable num is used but never declared inside the function.
// - Prediction of the Error
// - We expect two issues:
// - JavaScript will throw a syntax error because 3
//  is not a valid parameter name.
// - If the syntax were somehow ignored, the code would
//  later throw a ReferenceError because num is undefined.


function square(3) {
    return num * num;
}

// =============> write the error message here
// - The first (and stopping) error would be:
// - SyntaxError: Unexpected number
// - If one fixed the syntax but left num undeclared, one'd see:
// - ReferenceError: num is not defined

// =============> explain this error message here
// - SyntaxError: Unexpected number
// - This means JavaScript found a number (3) where it
// - expected a variable name — numbers can't be used as parameter names.
// - ReferenceError: num is not defined
// - This happens when the code tries to use a
// - variable num that hasn’t been declared or passed in.


// Finally, correct the code to fix the problem

// =============> write your new code here

// - We need to use a valid parameter name like num
// - Make sure we use that parameter consistently in the return statement.
function square(num) {
    return num * num;
}
// Example usage:
console.log(square(3)); // Output: 9
console.log(square(5)); // Output: 25


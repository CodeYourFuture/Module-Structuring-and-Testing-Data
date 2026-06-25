
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here

//  num is not declared as a result undefined error will be displayed. 

function square(3) {
    return num * num;
}

// =============> write the error message here

// /Users/Russom/Desktop/x.js:1
//function square(3) {
//SyntaxError: Unexpected number

// =============> explain this error message here

// The error message indicates that 3 cannot be passed as a parameter in the function declaration.
// The parameter should be a variable name not a number.

// Finally, correct the code to fix the problem

// =============> write your new code here


function square(num) {
	return num * num;
}
console.log(square(3));

// The output of the function will be 9 as 3 * 3 = 9.
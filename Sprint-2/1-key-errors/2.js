
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
//  the error will occur because the paramater of the function is not a valid variable name as it is a number. 
// also the variable num is not declared in the function and this will give an error when the program run because the function will not know what the value of the num is.

function square(3) {
    return num * num;
}

// =============> write the error message here 
// function square(3) {
//                 ^

// SyntaxError: Unexpected number

// =============> explain this error message here it means that the paramater of the function is an unexpected number (3) and this is not a valid variable number. 
I deleted the paramater of the function and run the programe and I get this error:
/box/index.js:2
    return num * num;
    ^

ReferenceError: num is not defined


// Finally, correct the code to fix the problem
change the function to this: function square(num)
// =============> write your new code here
function square(num) {
    return num * num;
}
console.log(square(3));

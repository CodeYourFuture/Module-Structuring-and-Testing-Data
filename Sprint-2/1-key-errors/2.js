
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
// the function is being declared with not a variable input

function square(3) {
    return num * num;
}

// =============> write the error message here
// SyntaxError: Illegal return statement

// =============> explain this error message here
// since number was never declared, num doesn't exist and there is nothing for return to return.

// Finally, correct the code to fix the problem

// =============> write your new code here
function square(num) {
    return (num * num);
}

console.log(square(3));
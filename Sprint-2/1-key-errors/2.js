
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
// I guess an error will be thrown because a number can not be a parameter.

function square(3) {
    return num * num;
}
// =============> write the error message here
//SyntaxError: Unexpected number

// =============> explain this error message here
// It does not know where the 3 came from. So instead of 3 it was supposed to be num.return num * num; does not work because num is not in the parameter.

// Finally, correct the code to fix the problem

// =============> write your new code here
function square(num) {
    return num * num;
}

console.log(square(3));




// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here

// num is not defined

function square(3) {
    return num * num;
}

// =============> write the error message here

// SyntaxError: Unexpected token (1:16)

// =============> explain this error message here

// You can't feed the value in there.  You need to call it from outside the function.  JS thinks it's a variable name which isn't allowed to start with a number.

// Finally, correct the code to fix the problem

// =============> write your new code here

function square(num) {
    return num * num;
}

console.log(square(2))



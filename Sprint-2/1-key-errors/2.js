
// Predict and explain first BEFORE you run any code...

// The code has a syntax error because a number is used instead of a parameter name in the function definition.
// Additionally, num is used inside the function without being declared or passed as an argument, which causes a ReferenceError.
// If the function is not called, it will not execute.
// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here

// The code has a syntax error because a number is used instead of a parameter name in the function definition.
// Additionally, num is used inside the function without being declared or passed as an argument, which causes a ReferenceError.
// If the function is not called, it will not execute.

function square(3) {
    return num * num;
}



// =============> write the error message here
// syntax error :unexpected number.

// =============> explain this error message here
// The error occurs because a number is used in the function definition instead of a parameter name. A function definition must contain a parameter (a variable name), not a value.

// Inside the function, num is used but it was never declared or passed as a parameter, which causes a ReferenceError because num is not defined in the scope.

// Also, if the function is not called, it will not execute.

// Finally, correct the code to fix the problem
// I corrected the function by properly defining num as a parameter instead of using a number in the function definition. This resolved the syntax error.

// Inside the function, num is now defined, so the ReferenceError is fixed.

// I then called the function with an argument and stored the returned value in a variable named num. Although the same variable name is used, the function parameter and the outer variable exist in different scopes, so there is no conflict.
// =============> write your new code here


function square(num) {
    return num * num;
}
const squaredValue =  square(3);
console.log(squaredValue);
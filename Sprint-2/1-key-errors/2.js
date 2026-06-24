
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> we should put num in the input of the function, instead of 3

function square(3) {
    return num * num;
}

// =============> 
//Uncaught SyntaxError SyntaxError: Unexpected number

// =============> explain this error message here
//3  is unexpected. when we define a function  we want to give it parameter(s), not a specific number. it is when the function is called that we want to give it specific values to pass in. 
// Finally, correct the code to fix the problem

// =============> write your new code here
function square(num) {
    return num * num;
}


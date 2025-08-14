
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here

//we will get an error bcs the parameter of the function need to string type not number so it can be something like num

function square(3) {
    return num * num;
}

// =============> write the error message here
//Output:

/index.js:1
function square(3) {
                ^

SyntaxError: Unexpected number
// =============> explain this error message here

// Finally, correct the code to fix the problem

// =============> write your new code here

//THe error message tells that we wrote a syntax that JavaScript does not understand.
function square(num) {
    return num * num;
}
result = console.log(square(3));
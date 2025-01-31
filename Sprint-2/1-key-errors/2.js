// Predict and explain first BEFORE you run any code...
// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
//  I think there would be a syntax error, because the code is saying return num which is not defined in the function's parameters.

//I think the code will return an undefined error, Because the num is not defined in the functions parameter.

function square(3) {
    return num * num;
}

// =============> write the error message here
//SyntaxError: Unexpected number

// =============> explain this error message here
//this means that the function / code is not written according to JavaScript syntax rules
// Finally, correct the code to fix the problem

// =============> write your new code here

function square(num) {
  return num * num;
}
console.log(square(5));

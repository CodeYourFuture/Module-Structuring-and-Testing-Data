// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> I think the problem in this code is the parameter inside the function. A number cannot be used as a parameter name.

/*function square(3) {
    return num * num;
}*/

// =============> SyntaxError: Unexpected number

// =============> The error message means that number cannot be used as a parameter name.

// Finally, correct the code to fix the problem

// =============> write your new code here

function square(num) {
  return num * num;
}
console.log(square(2));
console.log(square(3));

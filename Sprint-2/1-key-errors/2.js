// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
//it will throw an error for use of a primitive value instead of a variable.

//function square(3) {
//    return num * num;
//}

// =============> write the error message here, SyntaxError: Unexpected number

// =============> explain this error message here
//this error message is becasue we cannot pass a direct value to a function when creating it but rather when we call it. Instead we need to give it a parameter that can then hold the value that we want to pass to the function.
// Finally, correct the code to fix the problem

// =============> write your new code here
function square(num) {
  return num * num;
}

console.log(square(3));

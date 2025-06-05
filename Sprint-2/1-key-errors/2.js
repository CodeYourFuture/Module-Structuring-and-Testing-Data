
// Predict and explain first BEFORE you run any code...
/*I predict that this function will cause an error. The reason is that the function square is trying to use 3 as a parameter, 
which is not allowed. In JavaScript, function parameters must be variable names, not values.*/


// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
// Prediction: syntax error 

function square(3) {
    return num * num;
}

// =============> write the error message here
// SyntaxError: Unexpected number 


// =============> explain this error message here
// Function parameters must be variable names, not fixed values.
// Writing `function square(3)` is like saying "the parameter must always be 3", which JavaScript doesn't allow.
// It expects a **name**, like `num`, that can be passed different values when calling the function.


// Finally, correct the code to fix the problem

// =============> write your new code here


function square(num) {
  return num * num;
}

//we can now call the corrected function like this:

console.log(square(3));
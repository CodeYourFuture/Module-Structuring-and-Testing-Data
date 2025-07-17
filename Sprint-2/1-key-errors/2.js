// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
// A SyntaxError will occur because you cannot use a number such as `3` as a function parameter name.
// Names for parameters must be valid identifiers, for example, starting with a letter or underscore.

function square(3) {
    return num * num;
}

// =============> write the error message here
// `SyntaxError: Unexpected number`

// =============> explain this error message here
// Function parameters are placeholders for the values that will be passed into the function.
// These placeholders must follow the same naming rules as variables, and a variable name cannot be a number.
// In this instance, the code `function square(3)` is attempting to declare a parameter with the name `3`, which is not a valid identifier, hence the `SyntaxError`.

// Finally, correct the code to fix the problem

// =============> write your new code here
function squareFixed(num) {
  return num * num;
}

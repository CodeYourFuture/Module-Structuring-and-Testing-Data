
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> The code will throw a SyntaxError because function parameters must be named variables, but here a number (3) is being used instead.

function square(3) {
    return num * num;
}

// =============> SyntaxError: Unexpected number

// =============> In JavaScript, when you define a function you must use a variable name for the parameter, not a literal value like a number. In this code, `function square(3)` is invalid because `3` is a number, not a variable name. The interpreter expects a variable, so using a number causes a "SyntaxError: Unexpected number". Additionally, inside the function, the code uses a variable `num` that was never declared, which would also cause a ReferenceError if the function were defined properly.

// Finally, correct the code to fix the problem

// =============> 
function square(num) {
  return num * num;
}

console.log(square(3));



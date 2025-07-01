
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> wrong syntax the number 3 should not be in function

function square(3) {
    return num * num;
}

// =============> syntaxError: Unexpected number

// =============> when defining a function, the parentheses must contain parameter names, not values.
//                 function square(3) is invalid because 3 is a value, not a parameter name.

// Finally, correct the code to fix the problem

// =============>
function square(num){return num*num};

console.log (square(3));



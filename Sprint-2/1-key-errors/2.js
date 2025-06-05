
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> it's currently being passed an integer not a variabl; the variable num doesn't exist 

// || ORIGINAL CODE

// function square(3) {
//     return num * num;
// }

// =============> write the error message here
//  SyntaxError: Unexpected number

// =============> explain this error message here
//  we're passing a number to the function when something else is expected
//  my VS Code has a red squiggly under 3 and says "identifier expected"

// Finally, correct the code to fix the problem

// =============> write your new code here

function square(num) {
    return num*num;
}

squared = square(3);
console.log(squared);



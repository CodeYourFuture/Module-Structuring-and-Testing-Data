
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here

// I predict a SyntaxError because 3 is used directly in the function rather than variable name.


function square(3) {
    return num * num;
}

// =============> write the error message here

// Expected identifier but found "3"


// =============> explain this error message here

// Javascript expected a varible name but got the number 3 instead


// Finally, correct the code to fix the problem

// =============> write your new code here

function square(num) {
    return num * num;
}

console.log(square(3))
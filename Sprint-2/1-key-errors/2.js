
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here - Undefine error.As we don't have parameter num.  

function square(3) {
    return num * num;
}

function squareValue() {
    let num = 3;  
    return num * num;
}

console.log(squareValue());


// =============> write the error message here - Syntax Error. 

// =============> explain this error message here - mistake in the function name, as parameter can't start with the number. 

// Finally, correct the code to fix the problem

// =============> write your new code here

function square(num) {
    return num * num;
}
console.log(square(3))


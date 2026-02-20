
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> I am not sure but I do not think that (3) should be there in that way....

function square(3) {
    return num * num;
}

// =============> SyntaxError: Unexpected number

// =============> It doesn't like there being a number in "function square(3)" I also noticed obviously that return of num was not being told what num was anywhere at all.

// Finally, correct the code to fix the problem

// =============> write your new code here

function square(num) {
    return num * num;
}
console.log(square(50))
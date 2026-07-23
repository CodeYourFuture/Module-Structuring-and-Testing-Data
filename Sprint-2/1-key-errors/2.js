
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> The first error I see is the number 3 as the parameter inside the function. This is the error that JavaScript will flag as the parameter needs to be a variable name.
// The second error I noticed is num + num - what is num? JavaScript will not know as it has not been declared.
function square(3) {
    return num * num;
}


// =============> SyntaxError: Unexpected number

// =============> As I expected JavaScript has flagged the use of a number as the function parameter, as it needs to be a variable name. 

// Finally, correct the code to fix the problem

// =============> 

function square(num) {
return num * num;
}



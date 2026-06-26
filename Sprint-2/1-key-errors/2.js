
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> I predict the error will be indicated to line 8 function square(3) as a value should not be input in the function declaration. If we need to input a value in the function expression. 

function square(3) {
    return num * num;
}

// =============> 'SyntaxError: Unexpected number' is shown and it indicates line 8 at number 3.

// =============> I think the value 3 should not be input in the function declaration and instead it there should a parameter so the error will not be shown.

// Finally, correct the code to fix the problem

// =============> function square(num) {
// =============>     return num * num;
// =============> }
// =============> console.log(square(3));



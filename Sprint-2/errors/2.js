
// Predict and explain first...

// this function should square any number but instead we're going to get an error

function square(num) {
    return num * num;
}


//The function is supposed to square a number, but it will not work because of a syntax error. At line 6.
//Function parameters must be variable names, not numbers. like:num,Number,...
console.log(square(200));

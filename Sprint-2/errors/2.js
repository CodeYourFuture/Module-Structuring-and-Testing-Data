
// Predict and explain first...

// this function should square any number but instead we're going to get an error

/*function square(3) {
    return num * num;
}*/
/*Answer :
1-In the function declaration, we're trying to pass 3 as a parameter.This is not valid syntax in JavaScript. The parameter should have a name, not a value. Parameters are placeholders, and we should give them a name (like num or x) to represent the value that will be passed when calling the function.
2-Inside the function, we're using num * num, but there's no variable num defined in the function. Since the parameter should have a name, we'll need to use that name instead.
3-When we try to declare a parameter as 3, JavaScript doesn’t understand it because parameters need to be named variables.
4-The function attempts to multiply num * num, but since num was never properly defined as a parameter (due to the syntax issue), it would cause an error.
We should provide a proper parameter name. Here's the corrected version of the function:*/
function square(num) {
    return num * num;
}

console.log(square(3));
//We call the function with the argument 3, and it correctly returns 9
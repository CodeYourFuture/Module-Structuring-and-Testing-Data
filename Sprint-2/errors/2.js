
// Predict and explain first...

//This function wont run. We are using the variable num in the function body but it is nowhere to be seen in our parameters bracket or in the global scope. Using an undeckared variable and also using a number as a parameter is not allowed.

// this function should square any number but instead we're going to get an error

function square(num) {
    return num * num;
}

console.log(square(9));


//WHAT I UNDERSTAND:
//I cannot use 3 as a parameter. A variable must be used. Also num was used but not declared or not used as a parameter. which is incorrect and can lead to issues

//GPT:
//The function definition is incorrect because 3 is used as a parameter name, which is not allowed in JavaScript. Parameter names must be valid identifiers, and numbers cannot be used as identifiers.


// Predict and explain first...

// call the function capitalize with a string input
// interpret the error message and figure out why an error is occurring

function capitalize(str) {
   return `${str[0].toUpperCase()}${str.slice(1)}`;

}

console.log(capitalize("dog"));

//SyntaxError: Identifier 'str' has already been declared
//The variable has been declared twice in the same scope.

// Predict and explain first...

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring
//
//Answer: SyntaxError: Identifier 'str' has already been declared
//change the variable name inside the function body

function capitalise(str) {
  return newStr=`${str[0].toUpperCase()}${str.slice(1)}`;
}

console.log(capitalise("sprint2"))
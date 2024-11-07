// Predict and explain first...

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring
//
//Answer: SyntaxError: Identifier 'str' has already been declared
//change the variable name inside the function body

function capitalise(str) {
  let newStr = `${str[0].toUpperCase()}${str.slice(1)}`;
  return newStr;
}

console.log(capitalise("sprint2"))
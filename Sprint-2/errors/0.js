// Predict and explain first...
//I will get an error as I can see the same name "str" has been used.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str1 = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str1;
}
console.log(capitalise("hello"));
//syntax error: Identifier 'str' has already been declared: we can't use the same variable name both as a function's parameter
//and as a variable inside the function. so I changed the one inside the function to another name

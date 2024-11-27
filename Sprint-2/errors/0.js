// Predict and explain first...
// Prediction:
// Given the function capitalise
// When I call the function capitalise("hello")
// Then I expect the output to be "Hello"
// But the function is not working properly because the variable str is being redeclared in the function
// So the output will be "SyntaxError: Identifier 'str' has already been declared"

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}

console.assert(
  capitalise("hello") === "Hello",
  "The word hello should be capitalised"
);

// Explain:
// I executed and got this -> % node 0.js
// /Users/SallyMcGrath/CYF/ITP/Module-Structuring-and-Testing-Data/Sprint-2/errors/0.js:13
//   let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//       ^
// There's a little caret pointing to the place I need to fix.
// I fixed it by returning the value of the expression directly instead of redeclaring the variable str
// I tested my code with the assertion and it passed

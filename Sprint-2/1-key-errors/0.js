// Predict and explain first...
//  =============> write your prediction here
// - The code will throw a SyntaxError due to variable redeclaration.
// call the function capitalise with a string input
// - The function provided contains a syntax error because it attempts to redeclare
// - the parameter str within the function using let, which is not permitted
// - in JavaScript. Below is the corrected version of the function, followed by an example of how it can be called.
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> write your explanation here
// - When code run, this "SyntaxError: Identifier 'str' has
// - already been declared" will show
// - In the function capitalise(str), the parameter str is already declared.
// - But inside the function, you're trying to declare a new variable
// - with the same name using let str = ....
// - JavaScript doesn't allow declaring a new variable with the
//  same name as a function parameter using let or const within the same scope.
// =============> write your new code here
function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;

}

  capitalise(hello);
  console.log(capitalise('hello'));
  // I used "hello" as an example input when
  //  calling the capitalise function:
  // Output: 'Hello'
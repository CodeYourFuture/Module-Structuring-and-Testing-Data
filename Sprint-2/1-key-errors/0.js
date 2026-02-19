// Predict and explain first...
// I predict that the error is occurring because there is a variable name conflict. The parameter 'str' is being redeclared inside the function, which is not allowed in JavaScript. This will cause a syntax error because we cannot declare a variable with the same name as a parameter within the same scope.

// call the function capitalise with a string input
// capitalise("hello");

// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// The error occurs because we are trying to declare a new variable 'str' inside the function, which is already declared as a parameter. In JavaScript, you cannot declare a variable with the same name as a parameter within the same scope. To fix this error, we can simply remove the 'let' keyword and assign the new value to the existing parameter 'str' instead of trying to redeclare it.

function capitalise(str) {
// =============> write your new code here
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
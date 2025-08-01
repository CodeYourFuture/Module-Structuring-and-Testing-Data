// Predict and explain first...
//  The code will throw a SyntaxError when defining the variable `str` inside the function.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> The error occurs because the function parameter is named str and inside the function the code tries to declare a new variable using let str = . In JavaScript, you are not allowed to declare a new variable with the same name as an existing parameter using let, const or var. This causes a SyntaxError that says the identifier str has already been declared. To fix the error, use a different variable name inside the function.
// =============>

  function capitalise(str) {
  let capitalisedStr = `${str[0].toUpperCase()}${str.slice(1)}`;
  return capitalisedStr;
}

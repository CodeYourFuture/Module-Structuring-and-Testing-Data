// Predict and explain first...
// The error in the code occurs because the variable 'str' is being declared twice within the same scope.
// The first declaration is in the function parameter, and the second declaration is inside the function body.
// This causes a syntax error because JavaScript does not allow redeclaration of variables in the same scope using 'Let'.
// To fix this error, we can simply remove the 'Let' keyword from the second declaration of 'str' inside the function body.
// The correction would be to assign the new variable without redeclaration, like this: 'str = `${str[0].toUpperCase()}${str.slice(1)}`;'.
// This way, we are reassigning the value of 'str' without trying to declare it again.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// The error in the code occurs because the variable 'str' is being declared twice within the same scope.
// The first declaration is in the function parameter, and the second declaration is inside the function body.
// This causes a syntax error because JavaScript does not allow redeclaration of variables in the same scope using 'Let'.
// To fix this error, I can rename the variable inside the function body to something else, like 'caps', to avoid redeclaration.

function capitalise(str) {
  let caps = `${str[0].toUpperCase()}${str.slice(1)}`;
  return caps;
}

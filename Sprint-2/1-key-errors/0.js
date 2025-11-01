// Predict and explain first...
//  =============> write your prediction here

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  var str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
capitalise(hello);

// =============> write your explanation here
//cant overwrite the str variable with a new parameter, because it is let instead of var
// =============> write your new code here

function capitalise(str) {
  var str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
capitalise("hello"");
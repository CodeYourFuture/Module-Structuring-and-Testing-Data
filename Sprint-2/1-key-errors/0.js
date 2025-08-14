// Predict and explain first...
//  =============> write your prediction here

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// The error happened because the variable name str was used twice. First, it's used as a function parameter, and then it's declared again inside the function using let str, which is not allowed in JavaScript. You can't declare the same variable name twice in the same scope using let. That’s why we get a SyntaxError.

// i have two ways of fixing this code so i will write them one by one

// the first one is by using a different variable name

function capitalise(str) {
  let capitalised = `${str[0].toUpperCase()}${str.slice(1)}`;
  return capitalised;
}

// the second one is by reusing "str" without let

function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

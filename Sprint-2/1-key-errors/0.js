// Predict and explain first...
//  =============> write your prediction here
//
// I predict we will make mistake because str has been already declared in body of function

// call the function capitalise with a string input

//Uncaught SyntaxError: Identifier 'str' has already been declared

// interpret the error message and figure out why an error is occurring

//'str' has already been declared.Also we call function,defind it,but we don't use it.

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> write your explanation here

//So I change : I just return str directly  ,add a function call and console.log():

// =============> write your new code here

function capitalise(str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}

console.log(capitalise("Anuar"));

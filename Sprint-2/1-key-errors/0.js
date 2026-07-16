// Predict and explain first...
//  =============> SyntaxError: Identifier 'str' has already been declared

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

//function capitalise(str) {
// let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//return str;
//}

// =============> str has already been declared in the function. let can not redeclare a variable with the same name in the same scope. parameter, so we cannot declare it again with let. This will cause a syntax error. To fix this, we should remove the let keyword when assigning the new value to str.
// =============> write new code here

function capitalise(str) {
  let capitalised = `${str[0].toUpperCase()}${str.slice(1)}`;
  return capitalised;
}

console.log(capitalise("hello"));

// or function capitalise(str) {
//return `${str[0].toUpperCase()}${str.slice(1)}`;
//}

//console.log(capitalise("hello"));

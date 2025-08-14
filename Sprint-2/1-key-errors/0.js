// Predict and explain first...
//  =============> write your prediction here - we don't have console.log, it's will not show anyting


// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> write your explanation here - SyntaxError: Identifier 'str' has already been declared
// We need to change let to another name so it's not much with variables 
// =============> write your new code here

function capitalise(str) {
  let capitalizedStr = `${str[0].toUpperCase()}${str.slice(1)}`;
  return capitalizedStr;
}
console.log(capitalise("hello"));

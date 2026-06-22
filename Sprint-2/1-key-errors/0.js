// Predict and explain first...
//  =============> code will produce a SyntaxError the error will occur because the parameter str is being declared again with let str inside the function, which is not allowed

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> The error message says that str has already been declared this happens because str is already the function parameter,and the code tries to create another variable called str using let JavaScript does not allow a parameter and a let variable to have the same name in the same scope
function capitalise(str) {
  let capitalisedStr = `${str[0].toUpperCase()}${str.slice(1)}`;
  return capitalisedStr;
}

console.log(capitalise("hello"));

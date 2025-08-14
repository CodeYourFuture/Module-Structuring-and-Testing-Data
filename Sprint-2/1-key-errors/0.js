// Predict and explain first...
//  =============> write your prediction here ===> I think the 'str' variable is used in the function parameter even 
// before it is declared in the second line. This should not be the case. The variable should be declared first.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

//function capitalise(str) {
//  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//  return str;
//}

// =============> write your explanation here==> It brought a SYntaxError to say 'str' had already 
// been declared. No need to redeclare it.
// 
// =============> write your new code here
function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
console.log(capitalise("rodrygo"))
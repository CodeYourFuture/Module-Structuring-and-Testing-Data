// Predict and explain first...
//  =============> write your prediction here 
  // `My prediction` => The capitalise function tries to capitalize the first character of the string and concat it with the rest. This function may not run as it has error.

// call the function capitalise with a string input
  // `I called the capitalise function and found out there is a syntax error, we have already declared our 'str' variable in our function parameter, so its not a good idea to declare the same variable name as it ll throw an error.`

// interpret the error message and figure out why an error is occurring
  // `The error occurs because we have declared the same (str) variable two times`. We can not declare two variables with the same name.

/*function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
console.log(capitalise("Roman"));*/

// =============> write your explanation here
  // `to make this function run we should make we should declare two different variables in our function
  // .one as a parameter of the func and assign it with the above value. the second option is to return directly without creating a variable.`
// =============> write your new code here
function capitalized(str2){
  let capitalizedStr = `${str2[0].toUpperCase()}${str2.slice(1)}`;
  return capitalizedStr;
}
console.log(capitalized("hi dear"));
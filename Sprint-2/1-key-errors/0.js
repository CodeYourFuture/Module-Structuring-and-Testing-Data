// Predict and explain first...
//  =============> write your prediction here
 
// The code will capitalize the first word of the str which gives "Str"

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

// The error occurs in line 13 and it says "SyntaxError: Identifier 'str' has already been declared"
// The error is informing us that the string str has already been declared in line 12 so we can not declare it again.

//function capitalise(str) {
//  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//  return str;
//}

// =============> write your explanation here

// The code is written to capitalize the first letter of str which is expected to give the result Str.

// =============> write your new code here

function capitalise(firstLetters) {
  firstLetters = `${firstLetters[0].toUpperCase()}${firstLetters.slice(1)}`;
  return firstLetters;
}
console.log(capitalise("hello"))
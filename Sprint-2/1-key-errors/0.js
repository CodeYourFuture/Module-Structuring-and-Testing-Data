// Predict and explain first...
//  =============>Answer
// The function is suppose to capitalize the first character of a string input. Extracts the input string from index 1 which is the second character.
// The two string parts are joined using a template literal and the updated string is returned

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring
function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> We have an error because str is already declared as a function parameter
// =============> The new corrected code is
//Answer new code
function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
let result = capitalise("keith");
console.log(result);

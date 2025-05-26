// Predict and explain first...
//  =============> write your prediction here
// there will an error due to we want to declare the variable str and it is already declared , as it is a parameter

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
console.log(capitalise("loai"));

// =============> write your explanation here
// This code is to capitalize the first letter in the name

// =============> write your new code here

function capitaliseName(str) {
  let upperStr = `${str[0].toUpperCase()}${str.slice(1)}`;
  return upperStr;
}

console.log(capitaliseName("loai"));

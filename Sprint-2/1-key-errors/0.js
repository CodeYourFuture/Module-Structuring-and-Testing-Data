// Predict and explain first...
//  =============> write your prediction here

// I predict a SyntaxError because str is declared twice in the function.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> write your explanation here

// The capitalise function takes str as a paramenter but tries redeclaring it with the let variable, which isn't allowed in Javascript


// =============> write your new code here

function capitalise(str) {
   str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
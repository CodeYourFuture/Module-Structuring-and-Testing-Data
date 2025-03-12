// Predict and explain first...
//  =============> write your prediction here

//undinfind, It is because return str in function scope

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> write your explanation here
//str already claimed in function (link 9), It can't reclaim str in link 10 by using let in function
// =============> write your new code here

function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str
}
console.log(capitalise("Hello"));
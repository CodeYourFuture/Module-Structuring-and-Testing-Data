// Predict and explain first...
//  =============> write your prediction here
// the var inside ' ' is not seperated by +

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

console.log(capitalise(abcde));


// =============> write your explanation here
// the var str does not need to be declared again in the function
//
// =============> write your new code here
function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

console.log(capitalise("abcde"));
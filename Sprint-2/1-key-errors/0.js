// Predict and explain first...
//  =============> write your prediction here

//str has allready been declared.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> write your explanation here
/*
  I think its because of been called multiple times, at "let str" after "funtion capitalise(str)"
  changing "let str" to "let capitalised" should help the issue.
*/
// =============> write your new code here
/*
function capitalise(str) {
  let capitalised = `${str[0].toUpperCase()}${str.slice(1)}`;
  return capitalised;
}
*/

// Predict and explain first...
//  =============> write your prediction here
// you will get an error becuase srt has alredy been declared


// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

/*function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;*/


// =============> write your explanation here
//let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  //    ^

//SyntaxError: Identifier 'str' has already been declared
// =============> write your new code here
function capitalise(str) {
  let strTwo = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
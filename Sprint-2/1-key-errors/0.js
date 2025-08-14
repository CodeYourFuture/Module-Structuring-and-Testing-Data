// Predict and explain first...
//  =============> write your prediction here:
// there is promblem declaring the string twice.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

//function capitalise(str) {
 // let str = `${str[0].toUpperCase()}${str.slice(1)}`;
 // return str;

//}

// =============> write your explanation here: It say's syntax error "str" has been declared twice. We can change variable name in tp text or anything  else

// =============> write your new code here

function capitalise(text) {
  let capitalisedText = `${text[0].toUpperCase()}${text.slice(1)}`;
  return capitalisedText;
}
console.log(capitalise("hello world"));
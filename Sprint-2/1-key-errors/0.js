// Predict and explain first...
//  =============> I guess we would'nt need to say let in line 8 because str is already decleared as an argument 
// within the function capitalise(str).
// 

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

//function capitalise(str) {
//  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//  return str;
//}

//capitalise("hello")
// =============> A syntaxError occured as 'str' is already declared. 
// =============> write your new code here

function capitalise(str) {

  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

console.log(capitalise("hello"));
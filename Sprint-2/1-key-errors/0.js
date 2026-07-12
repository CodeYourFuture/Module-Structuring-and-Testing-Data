// Predict and explain first...
//  =============> We use a string template when we want to join different character sets together but by casing the first letter
// to uppercase we're assuming that it is formed of letters
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// Te error message says 'str' has already been declared so we can use another name for our 
//output to solve that error we change the output variable name
// function capitalise(str) {
 // let str1 = `${str[0].toUpperCase()}${str.slice(1)}`;
 // return str1;
//}

// Predict and explain first...
//  =============> write your prediction here

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
 let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> write your explanation here
//we recieve an syntax error beacuse we use str as parameter and then use as variable we can not do the same in js 
// =============> write your new code here
//to fix this i remove the let ,dont need to declare new variable str 
function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
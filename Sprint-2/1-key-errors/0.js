// Predict and explain first...
//  It will give a syntax error on using let str > write your prediction here

// call the function capitalise with a string input - did it with the console.log
// interpret the error message and figure out why an error is occurring

//function capitalise(str) {
//  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//  return str;
// }
// console.log(capitalise("newbell"));

// =============> write your explanation here
// str is a parameter which again is getting declared in line 2 of the code
// =============> write your new code here
function capitalise(str) {
str = `${str[0].toUpperCase()}${str.slice(1)}`;
return str;
}
console.log(capitalise("newbell"));

// Predict and explain first...
//  =============> I predict that we will not need to write let in line 8 as str is already declared
// as an argument within the function captialise.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

// function capitalise (str) {
//   let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//   return str;
// }

// capitalise ('hello');
//==============> A syntaxError occurred as 'str' is being cleared.


function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
console.log (capitalise ('hello'));



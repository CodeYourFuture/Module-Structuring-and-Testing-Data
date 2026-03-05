// Predict and explain first...
//  =============> write your prediction here

/*
My prediction is that this function will take the first letter of a string and capital it.
*/

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

/*function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}*/

// =============> write your explanation here

/*
The main reason why the capitalise function have a not define error because the the str variable have been declare in the parameter
inside the function, the str variable is re-declare again that will break the rule of how variable work.
*/

// =============> write your new code here

function capitalise(str) {
  let firstCapitaLetter = `${str[0].toUpperCase()}${str.slice(1)}`;
  return firstCapitaLetter;
};
console.log(capitalise("hello"));
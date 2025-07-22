// Predict and explain first...
//  =============> write your prediction here

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring
function capitalize(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> write your explanation here
// the function takes string arg it gets the first character of the string and capitalises it. the .slice method gets the rest of the string and concats the capitalized first char. all this is assigned to var called str and returns the str.
// the error says the var str has already been used in the function, this is because the var str is declared in the function and then again in the return statement. we could fix it by removing the var keyword in the return statement.
// =============> write your new code here

// function capitalize(str) {
//   return `${str[0].toUpperCase()}${str.slice(1)}`;
// }

console.log(capitalise('hello earth'));
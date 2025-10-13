// Predict and explain first...
//  =============> write your prediction here
//we should have an error showing that str already exists so we cannot declare it again inside the function.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

//function capitalise(str) {
//  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//  return str;
//}

//console.log(capitalise("cat"));

// =============> write your explanation here
//str has been passed down as a parameter so we cannot declare it again. we would need to declare a different variable name.
// =============> write your new code here
function capitalise(str) {
  let capitalisedStr = `${str[0].toUpperCase()}${str.slice(1)}`;
  return capitalisedStr;
}

console.log(capitalise("cat"));

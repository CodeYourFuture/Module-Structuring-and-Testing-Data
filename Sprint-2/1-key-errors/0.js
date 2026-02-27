// Predict and explain first...
//  =============> write your prediction here
// I think that the first letter of the string will be upper case and then the .slice method will extract a part of a string and return the extracted part, being --> apitalise.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring
// function capitalise is already a variable and let str is decalring that variable again but str already exists.

//function capitalise(str) {
  //let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  //return str;
//}

// =============> write your explanation here
// =============> write your new code here

function capitalise(str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}
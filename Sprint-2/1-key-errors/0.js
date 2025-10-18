// Predict and explain first...
//  =============> write your prediction here

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> write your explanation here
// =============> write your new code here

///The error is :

let str = `${str[0].toUpperCase()}${str.slice(1)}`;

//str is already a parameter of the function.
//Doing let str = ... is like giving it a new name in the same place, which JavaScript does not allow.
//we can just use the existing str instead of declaring it again.

function capitalise(str) {

  // make the first letter uppercase

  str = str[0].toUpperCase() + str.slice(1);

  return str;
}

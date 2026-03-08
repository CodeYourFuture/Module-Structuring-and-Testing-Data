// Predict and explain first...
// I am not able to predict any error, everything seems fine to me.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring
/*
function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}*/

// =============> Yeah, str name for the variable is already being used as the parameter of the function,
// that's why we can't declare it agian as being done in line 8.
// =============> the correct code would be as follows:

function capitalise(str) {
    let capitaliseStr = `${str[0].toUpperCase()}${str.slice(1)}`;
    return capitaliseStr;
}

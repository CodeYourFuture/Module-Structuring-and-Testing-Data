// Predict and explain first...
// The code will produce an error.

// call the function capitalise with a string input
//The error message indicates that 'str' has already been declared: function capitalise(str) and  let str

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> The error message indicates that 'str' has already been declared.
// =============>
function capitalise(str) {
  let capitalisedStr = `${str[0].toUpperCase()}${str.slice(1)}`;
  return capitalisedStr;
}

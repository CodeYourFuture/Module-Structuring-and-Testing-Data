// Predict and explain first...
//  =============> I presume the str is repeatedly declared, first as a parameter and again as a variable.


// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> str is already declared in the parameter and shouldn't be declared inside the function. The error says it's been declared already for this reason. Therefore we need to rename the str inside the function.
/* ==========> function capitalise(str) {
let result = `${str[0].toUpperCase()}${str.slice(1)};
return result;
}
OR
function capitalise(str) {
return `${str[0].toUpperCase()}${str.slice(1)}`;
}

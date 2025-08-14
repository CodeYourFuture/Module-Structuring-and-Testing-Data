// Predict and explain first...
// it should show syntax error

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// the input "sty" is the same as output "str" which is not allowed in JS
// my new code:

function capitalise(str) {
    return(`${str[0].toUpperCase()}${str. slice(1)}`)
}
console.log(capitalise("morning"))
console.log(capitalise("heavy"))



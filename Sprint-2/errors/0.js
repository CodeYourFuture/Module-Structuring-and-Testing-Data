// Predict and explain first...

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;// the problem is that the parameter and variable have the same name and it brings the syntaxerror
  return str;
}


function capitalise(str) {
  let string = `${str[0].toUpperCase()}${str.slice(1)}`;// here is the parameter has the identifier str, and the variable let has string
  return string;// let allows to re assign the variable
}

function capitalise(str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`;  
}

console.log("test", capitalise("abc"))
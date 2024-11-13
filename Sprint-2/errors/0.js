// Predict and explain first...

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

// The error came from the fact that str could not be declared twice and so I removed the let keyword 

function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

let myStr = capitalise("simphiwe");
console.log(myStr);
// Predict and explain first...
//str is declared twice and for sure we will get an error 

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

//As expected we got a syntaxError. We can correct the error by removing he let keyword 

function capitalise(str) {
   str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

console.log(capitalise("hello"));

// Predict and explain first...

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  const result = `${str[0].toUpperCase()}${str.slice(1)}`;
  return result;
}


/* 'str' is a variable, if I use 'let' for it, 'str' would be re-declaring. 
I should use result instead of str in the line 7 & 8, to avoid redefining 'str' */
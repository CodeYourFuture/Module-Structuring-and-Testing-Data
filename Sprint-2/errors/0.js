// Predict and explain first...

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

console.log(capitalise("hello"));

// it gives an error "str(function parameter) has already been declared" so we don't need to define it again in line 7
// in line 6 - we give the function the value or variable so in line 7- we don't nee to define the variable 
// I removed the "let" before "str" in line 7
// Predict and explain first...

// this function should square any number but instead we're going to get an error

function square(num) {
  return num * num;
}

//It will throw a SyntaxError

//In JavScript, parameters shoild be variable names, not literal values!

//To fix this issue, we replace 3 with a valid parameter name like num, then we call the
//function with 3 as an argument!

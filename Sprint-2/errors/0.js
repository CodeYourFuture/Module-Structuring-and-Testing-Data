// Predict and explain first...

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

/*function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

/*Answer:
he capitalise function is designed to take a string (str), capitalize its first letter, and return the modified string. Here’s what happens step-by-step:
The function capitalise accepts a parameter named str.
Inside the function, the code tries to declare a new let str, attempting to reassign str to a version of itself with the first letter capitalized.
The issue here is that there’s an attempt to use the name str both as:
The parameter of the function, and a local variable declared with let.
In JavaScript, we cannot use let to declare a new variable with the same name as an existing parameter within the same scope. This will throw an error, likely something like:SyntaxError: Identifier 'str' has already been declared
To fix this, we can use a different variable name inside the function instead of reusing str*/

function capitalise(str) {
  let capitalizedStr = `${str[0].toUpperCase()}${str.slice(1)}`;
  return capitalizedStr;
}

console.log(capitalise("leili"));

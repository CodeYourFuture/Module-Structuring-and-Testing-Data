// Predict and explain first...
//  =============> write your prediction here

/* 💡Answer: To be honest, I get confused when I see template literals and understand the older version of writing JS better, using operators, but I am dedicated to trying my best in this. I see a lot of the use of 'str' in this and I suspect this is almost correct but may fail because of the variable name 'str' used one too many times, as a parameter and a variable. I know that slice deletes parts of a string and 'toUpperCase' could be to capitalise things. */

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

/* function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
  */

// =============> What I get is a "SyntaxError: Identifier 'str' has already been declared". This means that in line 10 of my code, I have declared the variable 'str' twice, once as a parameter and once as a variable. This is not allowed in JavaScript, as each variable must have a unique name within its scope. To fix this, I need to remove the 'let' keyword from the second declaration of 'str', so that I am simply reassigning the value to the existing parameter instead of trying to declare it again.

// =============> write your new code here

function capitalise(str) {
  str = str[0].toUpperCase() + str.slice(1);
  return str;
}

console.log(capitalise("wheew! Done it without template literals :)")); // Should print "Wheew! Done it without template literals :)""

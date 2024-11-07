// Predict and explain first...

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

//predict://This code defines a function called capitalise that is supposed to take a string input, 
//capitalize the first letter, and return the modified string with the rest of the letters unchanged.

//explain://In line 6, ${} is used around str[0].toUpperCase(), but ${} only works inside Template Literals 
//(strings enclosed in backticks). Currently, this usage is incorrect, and JavaScript cannot process it. As a result, the code will likely produce a SyntaxError or ReferenceError

//Fix://To fix this issue, remove ${} and use str[0].toUpperCase() as a standalone expression. 
//Then, concatenate it with str. slice(1) to get the first character capitalized and the rest of the string unchanged.


function capitalise(str) {
  let result = str[0].toUpperCase() +str.slice(1);
  return result;
}
console.log(capitalise("hello")) ;

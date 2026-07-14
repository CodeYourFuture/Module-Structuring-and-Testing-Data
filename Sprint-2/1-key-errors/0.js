// Predict and explain first...
// If you try to run this code, it will throw a SyntaxError: Identifier 'str' has already been declared.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
    let str = `${str[0].toUpperCase()}${str.slice(1)}`;
    
    return str; 
}
// When you define function capitalise(str), JavaScript automatically creates a local variable named str inside the function's scope, 
// assigning it whatever value you pass into the function.
// The let keyword has a strict rule: you cannot declare a variable that already exists in the same scope. 
// Because str was already claimed by the function's parameter, JavaScript immediately stops and throws a SyntaxError before it even tries to capitalize anything.
// this is the reason why the error is occurring.
// the if condition i added is to ensure that if an empty string is passed to the function, it will return the empty string instead of throwing an error.
// To fix the error, you can simply remove the let keyword and just assign the new value to str without redeclaring it.

function capitalise(str) {
  if (typeof str !== "string" || str.length === 0) {
    return str;
  }

    return `${str[0].toUpperCase()}${str.slice(1)}`;
   
}
console.log(capitalise("hello world!"));



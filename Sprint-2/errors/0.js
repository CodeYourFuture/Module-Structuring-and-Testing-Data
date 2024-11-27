// Predict and explain first...

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let capitalStr = `${str[0].toUpperCase()}${str.slice(1)}`;
  return capitalStr;
}
console.log (capitalise("primary"))
console.log (capitalise("hello"))
console.log (capitalise("work"))
// when I run in node it gives a syntaxerror, as the variable str has been declared twice
// declare inside a function with a let keyword a variable CapitalStr to use a different variable name 
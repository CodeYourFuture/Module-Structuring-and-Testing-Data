// Predict and explain first...

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

/*function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

Error: SyntaxError: Identifier 'str' has already been declared

Fix:*/

function capitalise(capital) {
  let str = `${capital.toUpperCase()}${capital.slice(1)}`;
  return str;
}

console.log(`${capitalise(" change this text to uppercase " )}`);


/*gisdellabella@Giss-MBP errors % node 0.js
 CHANGE THIS TEXT TO UPPERCASE change this text to uppercase 
gisdellabella@Giss-MBP errors %*/
// Predict and explain first...
//  =============> write your prediction here

// call the function capitalise with a string input

// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let outputStr = `${str[0].toUpperCase()}${str.slice(1)}`;
  console.log(outputStr);
  return outputStr;
}
capitalise("edak");

// =============> write your explanation here

//expecting the function to return the  characters of the string, with the first character capitalized.

//syntaxError: Identifier 'str' has already been declared.
// The variable str  has already been passed as parameter in the function (), declaring it again cause an identity error

// =============> write your new code here

// function capitalise(str) {
// let outputStr = `${str[0].toUpperCase()}${str.slice(1)}`;
// console.log(outputStr);
// return outputStr;
//};
//capitalise('edak')

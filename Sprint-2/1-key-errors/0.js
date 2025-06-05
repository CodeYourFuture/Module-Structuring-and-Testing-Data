// Predict and explain first...
//  =============>Hmmn, not sure without running it honestly!
//  Is it that the variable str has been passed into the function, and then the code is trying to declare a new variable called str when it already exists?

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring
//  =======>SyntaxError: Identifier 'str' has already been declared
//  ahahahah I was right yay


// || OLD CODE
// function capitalise(str) {
//   let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//   return str;
// }

// =============> write your explanation here
//  see above
// =============> write your new code here

function capitalise(str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`
}

console.log(capitalise('moderat'));
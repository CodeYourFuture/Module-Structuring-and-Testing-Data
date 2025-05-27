// Predict and explain first...
//  =============> write your prediction here

//When we declare a function parameter it implicitly declare str as a variable therefore we should not redeclare str variable inside the function 

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring
// SyntaxError: Identifier 'str' has already been declared 
// as expected JS throws syntaxError which means it is not allowed to redeclare str variable in the same scope 


// =============> write your explanation here
// =============> write your new code here

function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
console.log(capitalise('book'))

//The function works because we reassign the parameter str instead of redeclaring it.
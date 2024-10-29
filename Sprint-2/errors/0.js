// Predict and explain first...
   //the str is occured twice in the function and declaration
//
// call the function capitalise with a string input
   
// interpret the error message and figure out why an error is occurring
  //SyntaxError: Identifier 'str' has already been declared :this means str is a parameter in the capitalise function and redeclare  by keyword let which is not allowed to redeclare by let keyword

function capitalise(str) {
   let str = `${str[0].toUpperCase()}${str.slice(1)}`;
   return str;
}

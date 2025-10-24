// Predict and explain first...
//  =============> I predict it will throw a syntaxerror because the parameter  'str' is already declare in the definition,
//and  line 9 try to declare another variable with the same name so the error will be identifier 'str'has already been declared .


// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

// function capitalise(str) {
//   let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//   return str;
// }
// capitalise("ahmadhmedan");

// =============> As I predict it will throw a SyntaxError: Identifier 'str' has already been declared
//because in JavaScript we can not redeclare the same variable in the same scope. 
function capitalise(str){
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}
console.log(capitalise("ahmadHmedan"));

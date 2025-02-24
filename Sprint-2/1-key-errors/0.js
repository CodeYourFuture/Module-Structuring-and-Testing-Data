// Predict and explain first...
//  =============> write your prediction here
    // It will come as ERROR because "str" already exists as a function.
// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring
   //Syntaxerror: Identifier 'str' has already been declared.
   //function capitalise(str) { ... }
   //let str = `${str[0].toUpperCase()}${str.slice(1)}`; cause an error because str is already in use.

//function capitalise(str) {
 // let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  //return str;
//}

// =============> write your explanation here
    // 1. str[0].toUpperCase() → Takes the first letter and makes it big.
    // 2. str.slice(1) → Keeps the rest of the letters as they are.
    // 3. ${str[0].toUpperCase()}${str.slice(1)} → Joins them back together!
// =============> write your new code here
function capitalise(str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}
console.log(capitalise("hello"))
console.log(capitalise("yorsalem"))

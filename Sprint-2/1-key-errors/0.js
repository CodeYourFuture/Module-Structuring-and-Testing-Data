// Predict and explain first...
//  =============> write your prediction here
//  We thought it going to show undefined, because the parameter in the function was the same which was empty so the code can't evaluate because it is an empty string.

// call the function capitalise with a string input


// function capitalise(str) {
  
//    let str=`${str[0].toUpperCase()}${str.slice(1)}`;   
//    return str; 
// }

// =============> write your explanation here
// interpret the error message and figure out why an error is occurring
// The error message was that str is already declare in the parameter. so we either had to change the parameter or the variable's name in the function or just return the expression without saving it into a variable


// =============> write your new code here
let string="millenaandifeanyand hatef";

function capitalise(str) {
  
  return `${str[0].toUpperCase()}${str.slice(1)}`;   
   
}
console.log(capitalise(string));
// Predict and explain first...
//  =============> write your prediction here
// I don't think this will work because str is already an argument in the capitalise function 
// so declaring it again is incorrect. Another thing is the variable str is being declared but the value assigned to 
// it basically uses the str variable to interpolate the string

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring



// function capitalise(str) {
//   let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//   return str;
// }

// =============> write your explanation here// 
// SyntaxError: Identifier 'str' has already been declared
// this is happening because the str variable already exist as an argument in this function
// =============> write your new code here

function capitalize(str){
  let car = `${str[0].toUpperCase()}${str.slice(1)}`;
 
  return car;  
}
capitalize("hello")
console.log(capitalize("hello"))
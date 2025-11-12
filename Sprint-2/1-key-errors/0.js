// Predict and explain first...
//  =============> write your prediction here
// I believe the code is trying to write the first letter of a string on capital letter. But since the "str" declaration has already been used, we will need a new name

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

// function capitalise(str) {
//   let str = `${str[0].toUpperCase()}${str.slice(1)}`;
//   return str;
// }

// =============> write your explanation here: //There is a SynthaxError on line 9 of the code when we try to declare a new variable with the name "str". This is because the "str" name has already been used when declaring the function "capitalise".
// =============> write your new code here
function capitalise(str) {
   let name = `${str[0].toUpperCase()}${str.slice(1)}`;
   return name;
 }
 let str = "emma";
 console.log(capitalise(str));

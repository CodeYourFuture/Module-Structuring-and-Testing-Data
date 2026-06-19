// Predict and explain :
// The code will throw a SyntaxError because a number is used as a parameter name.

//----------------------------------------------------------------------------------------------------------

// My prediction of the error :
//SyntaxError: Unexpected identifier

//----------------------------------------------------------------------------------------------------------

// Original code :
/*function square(3) {
  return num * num;
}*/

//----------------------------------------------------------------------------------------------------------

// The error message :
//SyntaxError: Unexpected number

//----------------------------------------------------------------------------------------------------------

// Explaination of the error message :
// Function parameters must be valid variable names (identifiers).
// The code uses the number 3 as a parameter, but numbers cannot be used as parameter names.

//----------------------------------------------------------------------------------------------------------

// Corrected code :
function square(num) {
  return num * num;
}
console.log(square(5));

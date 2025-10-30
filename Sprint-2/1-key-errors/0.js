// Predict and explain first...
//  =============> write your prediction here
//I think it will give an error because we have `str` twice in line 10 we should only have return without `str`  

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring



// =============> write your explanation here
// The error happened because 'str' was declared twice: once as a parameter and once with 'let' inside the function.
// Also, when calling the function, using a word without quotes caused a ReferenceError.
// After removing the duplicate declaration and passing a string with quotes, the function works correctly,
// =============> write your new code here 
function capitalise(str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}
console.log(capitalise("Hard"));

// Predict and explain first...
//  Missing backticks for template string template strings need to use backticks `, but here ${} is used without them

// call the function capitalise with a string input (error)
// interpret the error message and figure out why an error is occurring
// ${} must be inside backticks and str is being redeclared (it is already the function parameter) 


// =============> write your explanation here
// =============> This function takes a string and returns a new string with the first letter  in capital
function capitalise(str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
} 

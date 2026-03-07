// Predict and explain first...
//  =============> write your prediction here
// The command is to capitalise the first letter of the string. 

// call the function capitalise with a string input
// The code will produce an error before the function runs properly. The error message will say, SyntaxError: Identifier 'str' has already been declared

// interpret the error message and figure out why an error is occurring. 
// The error is occurring because the variable str is being declared twice in the function. The first declaration is in the function parameter, and the second declaration is inside the function body. This causes a conflict because you cannot declare a variable with the same name in the same scope.

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> write your explanation here
// The function capitalise takes a string input and attempts to capitalise the first letter of the string. However, the variable str is declared twice, which causes a SyntaxError. To fix this, we can remove the second declaration of str inside the function body and directly return the capitalised string.
// =============> write your new code here
// The corrected function should look like this:

function capitalise(str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}

// Now the function should work correctly and capitalise the first letter of the input string.
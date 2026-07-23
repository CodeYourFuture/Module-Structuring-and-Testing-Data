// Predict and explain first...
//  =============> I believe an error will occur as the same variable name has been declared twice.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
};

// =============> When running the code there was an error message saying 'Identifier 'str' has already been declared.
// This lets us know that the identifier - which is the name of the variable str - has been declared more than once. The error occurs as the same variable name - str - is being declared twice which is not allowed. 
// I would personally fix this by changing the variable name of the second declaration. 
// I tested this and didn't get a capitalised result - I realised this was because I hadn't also changed the variable name after 'return' - this was still str so I changed it to capitalised and now it works.
// =============> write your new code here
function capitalise(str) {
  let capitalised = `${str[0].toUpperCase()}${str.slice(1)}`;
  return capitalised;
};

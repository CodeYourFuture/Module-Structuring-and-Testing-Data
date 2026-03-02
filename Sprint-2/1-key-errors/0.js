// Predict and explain first...
// I think this function capitalise is meant to make the first letter of a string into uppercase then return the string

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

//function capitalise(str) {
 // let str = `${str[0].toUpperCase()}${str.slice(1)}`;
 // return str;
//}

// I got the error "SyntaxError: Identifier 'str' has already been declared" 
// This is because str had been declared in line 7 and let str in line 8 is also trying to declare str

// to fix this, I just removed the word let in line 8. This gave a value to str without trying to declare it again
// I ran the new code and there were no errors

function capitalise(str) {
  str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}
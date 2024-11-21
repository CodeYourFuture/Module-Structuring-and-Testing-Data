// Predict and explain first...
/*
Parameter: str: This is the input string that the function will process.
String Manipulation: 
- str[0].toUpperCase():
- str[0]: Accesses the first character of the input string.
- .toUpperCase(): Converts the first character to uppercase.
- str.slice(1): Extracts a substring starting from the second character (index 1) to the end of the string.

String Concatenation:
`${...}${...}``: This is a template literal, a concise way to construct strings.
The uppercase first character and the remaining substring are concatenated using the template literal.

Return Value: The newly formed string with the capitalized first letter is returned by the function.
*/

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

// the error Uncaught SyntaxError: Identifier 'str' has already been declared this is because str is the parameter 
// and we are trying to declare a new variable named str inside the function body

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}


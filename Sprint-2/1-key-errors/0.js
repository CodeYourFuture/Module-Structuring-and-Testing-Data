// Predict and explain first...
//  =============> write your prediction here

//  declare str again inside the function, which causes a syntax error


// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring


// =============> write your explanation here

// str[0].toUpperCase() → capitalizes the first letter.

// str.slice(1) → returns the rest of the string starting from index 1.

// Combines both parts into a new string.


// =============> write your new code here

function capitalise(str) {
  let capitalised = `${str[0].toUpperCase()}${str.slice(1)}`;
  return capitalised;
}

console.log(capitalise("hello")); // "Hello"
console.log(capitalise("jesus")); // "Jesus"

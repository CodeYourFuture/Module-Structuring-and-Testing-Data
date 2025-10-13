// Predict and explain first...
//  =============> write your prediction here : 
// The function capitalise is expected to take a string input and return the string with the first letter capitalised. When called with the input "hello", it should return "Hello". However, since the function body is empty, it will likely result in an error or return undefined.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

// function capitalise(str) {
//let str = `${str[0].toUpperCase()}${str.slice(1)}`;
// return str;
//}

// =============> write your explanation here : 
// The function capitalise is called with the string "hello" as an argument. The function takes the first character of the string, converts it to uppercase, and concatenates it with the rest of the string starting from the second character. The result is "Hello", which is then returned and logged to the console. There is no error in this code; it works as intended.

// =============> write your new code here :

function capitalise(str) {
  let capitalisedStr = `${str[0].toUpperCase()}${str.slice(1)}`;
  return capitalisedStr;
}

console.log(capitalise("hello"));
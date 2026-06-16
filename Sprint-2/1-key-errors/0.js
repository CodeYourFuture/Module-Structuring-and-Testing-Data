// Predict and explain first...
//  =============> write your prediction ==> This function it is going to capitalize the first character in a string.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

const helloString = "hello"

function capitalise(str) {
  let newStr = `${str[0].toUpperCase()}${str.slice(1)}`;
  return newStr;
}


// =============> write your explanation here
//We receive an error message because the str was already been declared as parameter in the function.

// =============> write your new code here
console.log(capitalise(helloString));

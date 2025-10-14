// Predict and explain first...
//  =============> write your prediction here:
// I think their will be an error because of the str tag





// call the function capitalise with a string input
console.log(capitalise("hello")); // should print "Hello"


// interpret the error message and figure out why an error is occurring


//function capitalise(str) {
  //let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  //return str;
//}

// =============> write your explanation here:
// str is being used as both the function parameter and a variable inside the function, causing a conflict.


// =============> write your new code here

function capitalise(inputStr) {
  return `${inputStr[0].toUpperCase()}${inputStr.slice(1)}`;}

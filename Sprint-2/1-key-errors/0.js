// Predict and explain first...
//  =============> write your prediction here
//the function will turn the first given character into Uppercase.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let strWithUpperCase = `${str[0].toUpperCase()}${str.slice(1)}`;
  return strWithUpperCase;
}

// =============> write your explanation here
// str[0].toUpperCase() ---> gets the first character and uses build-in method to convert a char to uppercase
// str.slice(1) ----> will slice the array or sting "start from 1" to the rest of array or string
// we get an error because we "re-declare" the str variable as parameter and as call back of expression

// =============> write your new code here

const myStr = "i forgot add this string";
console.log(capitalise(myStr));

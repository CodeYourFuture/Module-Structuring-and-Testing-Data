// Predict and explain first...
//  =============> this function takes a string and capitalize the first letter of each word, 
// then returns the modified string. However. if the first character is a space  or a number,
// the function must validate this edge case before processing to avoid unexpected results.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
};

console.log(capitalise("reza"));

// =============> the parameter name and the variable are the same while causes this error 
// =============> write your new code here

function capitalise(str) {
  let cap_string = `${str[0].toUpperCase()}${str.slice(1)}`;
  return cap_string;
};

console.log(capitalise("reza"));

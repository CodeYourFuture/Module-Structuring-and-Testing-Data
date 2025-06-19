// Predict and explain first...
//  =============> write your prediction here
I think the error will be that str has already been declared 
// call the function capitalize with a string input
// interpret the error message and figure out why an error is occurring

//function capitalize(str) {
 // let str = `${str[0].toUpperCase()}${str.slice(1)}`;
// return str;
//}

// =============> write your explanation here
in line 8 they are trying to declare str again
// =============> write your new code here

function capitalize(str) {
  let capitalize = `${str[0].toUpperCase()}${str.slice(1)}`;
 return capitalize;
}
console.log(capitalize(`praise`));

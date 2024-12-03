// Predict and explain first...

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

//function capitalise(str) {
  //let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  //return str;
//}


// The function parameter is named str, and then within the function, the let keyword is used to declare a variable with the same name (let str).
//In JavaScript, you cannot use let to redeclare a variable that’s already been defined in the same scope (like a function parameter).


function capitalise(str) {
   let name = `${str[0].toUpperCase()}${str.slice(1)}`;
  return name;
}
console.log(capitalise("hello"))
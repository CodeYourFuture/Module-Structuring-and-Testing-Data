// Predict and explain first...

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

/*function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}*/

// in the code str is used inside the function and the declared again and assigned new things. so in the modified version i changed how its used.

function capitalise(str) {
    str = `${str[0].toUpperCase()}${str.slice(1)}`;
    return str;
}
console.log(capitalise("hello"));
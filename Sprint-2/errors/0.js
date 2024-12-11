// Predict and explain first...

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring
    //  What woll happened is that str is indicated as the argument for the function and should not be declared within the function.

function capitalise(str) {
  let capitalisedStr = `${str[0].toUpperCase()}${str.slice(1)}`;
  return capitalisedStr;
}

console.log(capitalise("who let the dogs out?"));

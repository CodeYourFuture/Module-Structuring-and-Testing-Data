// Predict and explain first...
//This function will take the first letter of the string and capitalise it. It will take the letter starting at index 1 till the end and output that as normal

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

//I could not redeclare the string as it is already a parameter so I needed to declare a new variable and return that new variable.
function capitalise(str) {
  let updatedString = `${str[0].toUpperCase()}${str.slice(1)}`;
  return updatedString;
}

console.log(capitalise("serna malala is a woman."));
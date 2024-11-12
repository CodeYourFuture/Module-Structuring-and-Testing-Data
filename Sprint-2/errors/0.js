// Predict and explain first...

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring
// The error is happening because the code is declaring th str variable twice
// To fix this, I will only add the str assignment to the return statement and remove the let str part

function capitalise(str) {
  return `${str[0].toUpperCase()}${str.slice(1)}`;
}

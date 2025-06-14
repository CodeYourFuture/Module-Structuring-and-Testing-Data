// Predict and explain first...
//  =============> write your prediction here
//
// I predict we will make mistake because str has been already declared

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> write your explanation here
// =============> write your new code here

function capitalise(str) {
  return (str = `${str[0].toUpperCase()}${str.slice(1)}`);
}

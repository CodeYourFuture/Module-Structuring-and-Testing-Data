// Predict and explain first...
//  =============> write your prediction here

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

//because str is already existing parameter we can not declare let str again. 
// we can  rename  the str to fix the problem. 


function capitalise(str) {
  let cap_str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return cap_str;
}

console.log(capitalise("khilola"));


// =============> write your explanation here
// =============> write your new code here

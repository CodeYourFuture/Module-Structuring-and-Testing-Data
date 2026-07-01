// Predict and explain first...
//  =============> write your prediction here
// My prediction is that the function will throw an error because the variable which also the parameter is redeclared again inside the function.
// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> write your explanation here: to explain, The parameter str already exists in that function's scope,
// so trying to `let str = ...` again is redeclaring the same name in the same scope, and JS won't allow it.
// =============> write your new code here: function capitalise(str) {
//                                       let capitaliseFristLatter = `${str[0].toUpperCase()}${str.slice(1)}`;

//                                       return capitaliseFristLatter;
//                                         }

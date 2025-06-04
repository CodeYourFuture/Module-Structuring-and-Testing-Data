// Predict and explain first...
//  =============> the code will run into error and break. This because you have str - same name - as both parameter/argument for the function capitalise & a declared
// variable in the following line.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> the error message indicate that 'str'has already been declared. This is true as 'str' was first declared/introduced as a parameter for
// the function capitalise. Therefore, you can re-declare the same 'str' within the same scope as a variable as seen in lin 9. 
 capitalise("hassan");

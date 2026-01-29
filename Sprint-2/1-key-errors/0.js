// Predict and explain first...
//  =============> Capitalises the first letter of the str

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

capitalise("mohsen");

// =============> variable str is declared again inside function
// =============> str = `${str[0].toUpperCase()}${str.slice(1)}`;

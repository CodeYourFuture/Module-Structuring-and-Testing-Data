// Predict and explain first...

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(st) {
  let str = `${st[0].toUpperCase()}${st.slice(1)}`; 
  return str;
}
// becuase you trying to declare 'str' variable which has already been declared


// Predict and explain first...

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(x) {
  let z = `${x[0].toUpperCase()}${x.slice(1)}`; //inja age + bezaram toye output mishe + lol
  return z;
}
 /*khob error chi bood? i gave variable x to be my parameter. so now inside the function, if  i want to create a new
 variable, it needs a new name! */
console.log(capitalise("moein"));
// Predict and explain first...
// we create a function that takes a parameter and  returns the value multiplied by itself to give a square number.

// this function should square any number but instead we're going to get an error
// It is because we are using an integer '3' which is not a valid paremeter. In order for it to accept an integer we can name the parameter num which will fix the error.
function square(num) {
  return num * num;
}

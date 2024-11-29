// Predict and explain first...

// this function should square any number but instead we're going to get an error
// The code need to work with any given number, so the declaration of a 3 as an argument defeats this priviledge
// To fix it, I will remove the digit 3 and put num as the parameter. And to test I have added a console.log
// with 3 as the num

function square(num) {
  return num * num;
}
console.log(square(3));

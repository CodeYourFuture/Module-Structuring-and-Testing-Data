// Predict and explain first BEFORE you run any code...
//>>>>>sure, it
// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here
//the function will return square for every given number.

// function square(3) {
//     return num * num;
// }

// =============> write the error message here
// ans: Unexpected number

// =============> explain this error message here
// ans: function need num to be defined, instead parameter was given 3 as literal value that does not point to any variable as parameter
// Finally, correct the code to fix the problem

// =============> write your new code here

function square(num) {
  return num * num;
}

mynum = 3; //define the num

console.log(square(mynum)); //verify the result

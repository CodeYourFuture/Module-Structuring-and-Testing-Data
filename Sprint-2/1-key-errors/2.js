
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> write your prediction of the error here

// It will bring an error was run because the function square is trying to use value 3 yet in JS the function parameter must use variable names not values.

function square(3) {
    return num * num;
}
// =============> write the error message here
SyntaxError:Unexpected number 


// =============> explain this error message here

//You cannot use a number (3) as a function parameter hence its invalid

// num is used in the return statement, but it’s never defined.

// Finally, correct the code to fix the problem


// =============> write your new code here
function square(num) {
    return num * num;
  }

  console.log(square(3));


// Predict and explain first...

// this function should square any number but instead we're going to get an error

// function square(3) {
//     return num * num;
// }


// The original function is incorrect because:
// 1. The function parameter is written as `3`, which is a value, not a valid parameter name.
// 2. Inside the function, the variable `num` is referenced, but it has not been defined anywhere, causing a ReferenceError.

function square(number) {
    // Now, instead of `3`, we have a valid parameter name `number`.
    // The function will take `number` as input and return `number * number` (the square of the number).
    
    return number * number;  // Multiply the number by itself to square it.
  }
  
  // Testing the function by passing the value `3` to it
  console.log(square(3));  // Expected Output: 9
  
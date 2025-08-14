
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

//SyntaxError: Unexpected number


function square(3) {
    return num * num;
}

// syntaxError: Unexpected number


/* A function parameter cannot be a number — it must be a variable name.
In function square(3), the number 3 is not allowed in the function definition. 
Instead, we should use a variable like num to receive values when the function is called. That’s why this gives a SyntaxError.*/



// Finally, correct the code to fix the problem

function square(num) {
    return num * num;
  }
  
  console.log(square(3)); // Output: 9
  



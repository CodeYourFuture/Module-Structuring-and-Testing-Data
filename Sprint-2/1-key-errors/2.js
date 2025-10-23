
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// =============> First there is a number inside the function which is not allowed in JavaScript it should be a variable name
//the second mistake is num is not declared

function square(3) {
    return num * num;
}

// =============> Uncaught SyntaxError: Unexpected number
// =============> we put a number (3)where JavaScript expected a variable name 
//Uncaught SyntaxError: Illegal return statement

//we cant use return inside the function without declaring the function properly

// Finally, correct the code to fix the problem


// =============> 
function square(num) {
  return num * num;
}
console.log(square(3));  // the answer should be 9
console.log(square(5));  // the answer should be 25
console.log(square(10)); // the answer should be 100




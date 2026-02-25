
// Predict and explain first BEFORE you run any code...

// this function should square any number but instead we're going to get an error

// Error because the variable 'num' is not defined when we try to call the function. 
// The function expects 
// a parameter but we're not passing any argument when calling it.

function square(num) {
    return num * num;
}

// The function will return NaN  (Not a Number) 
//  this doesn't throw an error, but returns NaN  because: 
// - num is undefined (no argument passed) 
// - undefined * undefined = NaN 

// When square() is called without an argument, the parameter 'num' has 
// // the value 'undefined'. When you multiply undefined * undefined, 
// // JavaScript returns NaN (Not a Number) instead of throwing an error. 

function square(num)
 {
     return num * num;
     } 
     console.log(square(5)); // Output: 25 console.log(square(10)); 



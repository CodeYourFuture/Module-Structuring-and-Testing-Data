// Predict and explain first...

// Due to no return statement we get undefined as an output instead of the value 320 when we call the multiply() function. The console.log expression will not save the functions' value thus the function can't be reusable. Having the console.log online 6 is only good for debugging. 

function multiply(a, b) {
   return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

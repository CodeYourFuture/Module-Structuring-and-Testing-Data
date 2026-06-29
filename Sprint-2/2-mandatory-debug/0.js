// Predict and explain first...

// This code will actually run without throwing a red crash error, 
// but it will print something very strange. the result of multiplying 10 and 32 is undefined.

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// console.log() inside the function: Inside the multiply function, you used console.log(a * b). 
// This instantly prints 320 to the screen, but it does not give that number back to the code that called it.
//The Missing return: In JavaScript, if a function does not explicitly use the word return, it automatically hands back undefined.
//The undefined string: Because multiply(10, 32) returns undefined, your outer console.log plugs undefined into the sentence, resulting in: "The result of multiplying 10 and 32 is undefined".

// Finally, correct the code to fix the problem  
function multiply(a, b) {
  return a * b;
}

console.log(multiply(10, 32));
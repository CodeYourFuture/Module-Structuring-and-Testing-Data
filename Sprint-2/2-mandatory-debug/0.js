// Predict and explain first...

// =============> this code needs a return function to insert 320 into the string  

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> this code creates a function called multiply on  line 5, line 6 is ignored for now because it's part of the function definition.
//Then JS read the code further from top to bottom until line 9, where it sees the values attached to the parameters and runs the function on 5 now, with new values. 
//lines 6 then becomes console.log(320). Function ends here. 

//

// Finally, correct the code to fix the problem
//  =============> 
function multiply(a, b) {
  return a * b;
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

/* 

this exercise is about understanding the differemce between console and return , in essense. 
With return, the value can be inserted into the template literal.
With console.log, the value is only displayed and then discarded.

*/
